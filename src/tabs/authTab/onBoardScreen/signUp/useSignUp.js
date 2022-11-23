import { useReducer, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../constants/helper';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../../../../actions/userActions';

const useSignup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useReducer(
    (state, nextState) => ({...state, ...nextState}),
    {
      first_name: '',
      last_name: '',
      phone: '',
      country_code: '+1',
      zip_code: '',
      email: '',
      password: '',
      user_type: 1,
    },
  );

  const handleChange = (name, value) => setUserData({[name]: value});

  const next = async () => {
    try {
      const {first_name, last_name, email} = userData;
      if (first_name.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a First Name'],
        });
      }
      if (last_name.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a Last Name'],
        });
      }
      if (email.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add an Email'],
        });
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a valid Email'],
        });
      }
      return navigation.navigate('signup-details', {
        first_name,
        last_name,
        email,
      });
    } catch (error) {
      console.log({error});
      return setAlert({
        close: () => setAlert(false),
        title: 'Error',
        icon: 'error',
        confirmText: 'Ok',
        message: ['Network Error'],
      });
    }
  };

  const signup = async () => {
    // return  navigation.navigate('verify-otp')

    try {
      setLoading(true);
      const {
        user_type,
        first_name,
        last_name,
        phone,
        email,
        zip_code,
        password,
        country_code,
      } = userData;
      //ensure all required fields are provided;

      if (first_name.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a First Name'],
        });
      }
      if (last_name.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a Last Name'],
        });
      }
      if (phone.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a Phone Number'],
        });
      }
      if (phone.trim().length > 12) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a valid Phone Number'],
        });
      }
      if (email.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add an Email'],
        });
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a valid Email'],
        });
      }
      if (!/\b[a-zA-Z0-9]{6}\b/.test(zip_code.trim())) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add a valid zip code'],
        });
      }
      if (password === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please add apassword'],
        });
      }
      if (password.length < 6) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Password must have a minimum of 6 characters'],
        });
      }
      if (!country_code) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please select your current country'],
        });
      }

      const response = await axios.post(
        `${API_URL}/auth/register-kocntracker`,
        {
          user_type,
          email: email.trim(),
          password: password,
          first_name: first_name.trim(),
          last_name: last_name.trim(),
          phone,
          zip_code,
          password_confirmation: password,
          country_code,
        },
      );

      //handle success
      setLoading(false);
      await dispatch(
        login({email: email.trim(), phone: phone.trim(), country_code}),
      );
      navigation.navigate('verify-otp');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('data', error.response.data);
        for (let key in error.response.data.errors)
          errors.push(error.response.data.errors[key]);
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
      console.log('config', error.config);
      //handle catch error
    }
  };

  return {
    userData,
    alert,
    loading,
    handleChange,
    signup,
    next,
  };
};

export default useSignup;
