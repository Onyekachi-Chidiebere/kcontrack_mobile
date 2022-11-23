import {useReducer, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const useSelectCategory = () => {
  const errors = [];
  const navigation = useNavigation();
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const phone_number = useSelector(state => state.user.phone);

  const selectCategory = category => {
    if (loading) return;
    if (selectedCategory.includes(category.name))
      return setSelectedCategory(old =>
        old.filter(item => item != category.name),
      );
    return setSelectedCategory(old => [...old, category.name]);
  };

  const getCategories = async () => {
    // return  navigation.navigate('verify-otp')

    try {
      setLoading(true);

      const response = await axios.get(`${API_URL}/categories`);
      setCategories(response.data.data);
      //handle success
      setLoading(false);
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
      //handle catch error
    }
  };

  const updateCategories = async () => {
    try {
      setLoading(true);

      const response = await axios.put(`${API_URL}/profile/update-categories`, {
        phone: phone_number,
        categories: selectedCategory,
      });
      //handle success
      setLoading(false);
      return setAlert({
        close: () => {
          setAlert(false);
          navigation.navigate('verify-email');
        },
        title: 'Success',
        icon: 'success',
        confirmText: 'Ok',
        message: [response.data.message],
      });
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
    getCategories,
    selectCategory,
    updateCategories,
    selectedCategory,
    alert,
    categories,
    loading,
  };
};

export default useSelectCategory;
