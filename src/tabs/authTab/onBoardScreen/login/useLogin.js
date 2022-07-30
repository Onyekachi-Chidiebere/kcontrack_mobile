import {useReducer, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../../constants/helper';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../../../actions/userActions';
import {useDispatch} from 'react-redux';

const useLogin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useReducer(
    (state, nextState) => ({...state, ...nextState}),
    {
      // email: '',
      // password: '',

      email: 'onyekachichidiebere60@gmail.com',
      password: 'qwerty',
    },
  );

  const handleChange = (name, value) => setUserData({[name]: value});

  const loginUser = async () => {
    const {email, password} = userData;
    try {
      setLoading(true);

      //ensure all required fields are provided;

      if (email.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide an email'],
        });
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide a valid email'],
        });
      }
      if (password === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['please add password'],
        });
      }
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: email.trim(),
        password: password,
      });
      console.log({user: response.data.data.user.profile.gender});
      dispatch(
        login({
          jwt: response.data.data.bearer_token,
          categories: response.data.data.categories,
          ...response.data.data.user,
        }),
      );
      navigation.navigate('main');
      //handle success
      setLoading(false);
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

        if (error.response.data.code === 'F7ITH3')
          return setAlert({
            close: () => {
              setAlert(false);
              if (error.response.data.code === 'F7ITH3') {
                dispatch(login({email: email.trim()}));
                navigation.navigate('verify-email');
              }
            },
            title: 'Email Verification Required',
            icon: 'question',
            confirmText: 'Ok',
            message: errors,
          });
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
    handleChange,
    alert,
    loginUser,
  };
};

export default useLogin;
