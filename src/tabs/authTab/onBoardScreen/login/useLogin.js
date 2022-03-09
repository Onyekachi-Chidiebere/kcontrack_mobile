import { useReducer, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../constants/helper';

const useLogin = () => {
const errors = [];
const [loading, setLoading] = useState(false);
const [userData, setUserData] = useReducer(
  (state, nextState) => ({ ...state, ...nextState }),
  {
    email: '',
    password: '',
  }
);

const handleChange = (name, value) => setUserData({ [name]: value });

const login = async () => {
  const {
    email,
    password,
  } = userData;
  try {
    setLoading(true);

    //ensure all required fields are provided;
   
    if (email.trim() === '') {
      setLoading(false);
      return Swal.fire({
        title: 'Error!',
        text: 'Please add an Email',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setLoading(false);
      return Swal.fire({
        title: 'Error!',
        text: 'Please add a valid email',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
    if (!/\b[a-zA-Z0-9]{6}\b/.test(zip_code.trim())) {
      setLoading(false);
      return Swal.fire({
        title: 'Error!',
        text: 'Please add a valid zip code',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
    if (password === '') {
      setLoading(false);
      return Swal.fire({
        title: 'Error!',
        text: 'Please add a password',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: email.trim(),
      password: password,
    
    });
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
    //handle catch error
  }
};

  return {
    userData,
    loading,
    handleChange,
    login,
  };
};

export default useLogin;
