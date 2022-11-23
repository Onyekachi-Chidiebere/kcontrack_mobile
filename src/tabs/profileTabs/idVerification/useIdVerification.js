import {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useNavigation} from '@react-navigation/native';
import {updateProfile} from '../../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

const useIdVerification = () => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const errors = [];
  const [frontPath, setFrontPath] = useState({});
  const [backPath, setBackPath] = useState({});
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(1);
  const types = {
    1: 'passport',
    2: 'divers license',
    3: 'health card',
    4: 'permanaent Resident card',
  };

  const imageGalleryLaunch = setFilePath => {
    let options = {
      includeBase64: true,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);
      } else {
        setFilePath(res.assets[0]);
      }
    });
  };

  const updateIdVerification = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/profile/id-verification`,
        {
          type: types[type],
          front: 'data:image/jpeg;base64,' + frontPath.base64,
          back: 'data:image/jpeg;base64,' + backPath.base64,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.jwt}`,
          },
        },
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
        message: ['Document Uploaded Successfully'],
      });
      //handle success
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
    frontPath,
    backPath,
    loading,
    type,
    types,
    alert,
    setBackPath,
    setFrontPath,
    updateIdVerification,
    imageGalleryLaunch,
    setType,
  };
};

export default useIdVerification;
