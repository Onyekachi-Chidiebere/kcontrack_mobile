import {useReducer, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const useVerifyEmail = () => {
  const navigation = useNavigation();
  const email = useSelector(state => state.user.email);
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useReducer(
    (state, nextState) => ({...state, ...nextState}),
    {
      verification_code: '',
    },
  );

  const handleChange = (name, value) => setUserData({[name]: value});

  const verifyOtp = async () => {
    try {
      setLoading(true);
      const {verification_code} = userData;
      if (verification_code.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a verification code'],
        });
      }

      const response = await axios.get(
        `${API_URL}/auth/verify?email=${email}&token=${verification_code}`,
      );
      setLoading(false);
      return setAlert({
        close: () => {
          setAlert(false);
          navigation.navigate('login');
        },
        title: 'Success',
        icon: 'success',
        confirmText: 'Ok',
        message: [response.data.data],
      });
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('data', error.response.data);
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
      return setAlert({
        close: () => setAlert(false),
        title: 'Error',
        icon: 'error',
        confirmText: 'Ok',
        message: [error.message],
      });
      //handle catch error
    }
  };

  return {
    userData,
    alert,
    loading,
    handleChange,
    verifyOtp,
  };
};

export default useVerifyEmail;
