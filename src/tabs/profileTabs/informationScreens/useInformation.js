import {useReducer, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfileWallet} from '../../../actions/userActions';

const useInformation = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  const [userData, setUserData] = useReducer(
    (state, nextState) => ({...state, ...nextState}),
    {
      transit_number: user.wallet.transit_number, // transit number should be exactly 5 digits
      institution_number: user.wallet.institution_number, // institution number should be 3 digits
      account_number: user.wallet.account_number, //account should be exactly 7 digits
      account_number_confirmation: user.wallet.account_number,
      social_security_number: user.profile.social_security_number, //socila security number should be 9 digits
      social_security_number_confirmation: user.profile.social_security_number,
    },
  );
  const handleChange = (name, value) => setUserData({[name]: value});

  const updatePayInformation = async () => {
    const {
      transit_number,
      institution_number,
      account_number,
      account_number_confirmation,
    } = userData;
    try {
      setLoading(true);
      if (account_number.length !== 7) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Account Number must be 7 digits'],
        });
      }
      if (account_number !== account_number_confirmation) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Account numbers do not match'],
        });
      }
      if (transit_number.length !== 5) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide a valid transit number'],
        });
      }
      if (institution_number.length !== 3) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide a valid institution number'],
        });
      }

      const response = await axios.put(
        `${API_URL}/profile/update-pay-info`,
        {
          transit_number: transit_number.trim(),
          institution_number: institution_number.trim(),
          account_number: account_number.trim(),
          account_number_confirmation: account_number_confirmation.trim(),
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      dispatch(
        updateProfileWallet({
          transit_number: transit_number.trim(),
          institution_number: institution_number.trim(),
          account_number: account_number.trim(),
        }),
      );
      setLoading(false);
      return setAlert({
        close: () => {
          setAlert(false);
          navigation.pop();
        },
        title: 'Success',
        icon: 'success',
        confirmText: 'Ok',
        message: ['Payment Information Updated successfully'],
      });
      //handle success
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log('headers', error.response.headers);
        for (let key in error.response.data.errors)
          errors.push(error.response.data.errors[key]);
        errors.push(error.response.data.message);

        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: errors,
        });
        //handle error
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log('config', error.config);
      return setAlert({
        close: () => setAlert(false),
        title: 'Error',
        icon: 'error',
        confirmText: 'Ok',
        message: ['Network Error'],
      });
      //handle catch error
    }
  };

  const updateTaxInformation = async () => {
    const {social_security_number, social_security_number_confirmation} =
      userData;
    try {
      setLoading(true);
      if (social_security_number.length !== 9) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide a valid tax number'],
        });
      }
      if (social_security_number !== social_security_number_confirmation) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Tax numbers do not match'],
        });
      }
      const response = await axios.put(
        `${API_URL}/profile/update-tax-info`,
        {
          social_security_number: social_security_number.trim(),
          social_security_number_confirmation:
            social_security_number_confirmation.trim(),
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      return setAlert({
        close: () => {
          setAlert(false);
          navigation.pop();
        },
        title: 'Success',
        icon: 'success',
        confirmText: 'Ok',
        message: ['Tax Information Updated successfully'],
      });
      //handle success
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log('headers', error.response.headers);
        for (let key in error.response.data.errors)
          errors.push(error.response.data.errors[key]);
        errors.push(error.response.data.message);

        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: errors,
        });
        //handle error
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log('config', error.config);
      return setAlert({
        close: () => setAlert(false),
        title: 'Error',
        icon: 'error',
        confirmText: 'Ok',
        message: ['Network Error'],
      });
      //handle catch error
    }
  };

  return {
    userData,
    loading,
    alert,
    edit,
    setEdit,
    updateTaxInformation,
    handleChange,
    updatePayInformation,
  };
};

export default useInformation;
