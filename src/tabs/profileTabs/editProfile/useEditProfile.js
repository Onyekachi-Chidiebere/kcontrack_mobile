import {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useNavigation} from '@react-navigation/native';
import {updateProfile} from '../../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

const useEditProfile = () => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const errors = [];
  const [filePath, setFilePath] = useState({});
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const genderList = [
    {gender: 'Male', value: 1},
    {gender: 'Female', value: 2},
    {gender: 'other', value: 9},
  ];
  const [userData, setUserData] = useReducer(
    (state, nextState) => ({...state, ...nextState}),
    {
      email: user.email,
      firstname: user.first_name,
      lastname: user.last_name,
      gender: null,
      phone: user.phone,
      zipcode: user.zip_code,
    },
  );
  const handleChange = (name, value) => setUserData({[name]: value});
  const selectGender = gender => handleChange('gender', gender);

  const imageGalleryLaunch = () => {
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

  useEffect(() => {
    for (let i = 0; i < genderList.length; i++) {
      if (genderList[i].value == user.profile.gender)
        selectGender(genderList[i]);
    }
  }, []);

  console.log({jjj: user.picture});
  const updateUser = async () => {
    const {email, phone, firstname, lastname, gender, zipcode} = userData;
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

      if (firstname.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide first name'],
        });
      }
      if (lastname.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide last name'],
        });
      }
      if (zipcode.trim() === '') {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please provide zipcode'],
        });
      }
      if (!gender) {
        setLoading(false);
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please select gender'],
        });
      }
      const response = await axios.put(
        `${API_URL}/profile/update`,
        {
          first_name: firstname.trim(),
          last_name: lastname.trim(),
          phone: phone,
          gender: Number(gender.value),
          dob: '2021-05-05',
          zip_code: zipcode.trim(),
          picture: 'data:image/jpeg;base64,' + filePath.base64,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      console.log({responsehkk: response.data.data.user});
      dispatch(updateProfile(response.data.data.user));
      navigation.pop();
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
    filePath,
    genderList,
    userData,
    loading,
    alert,
    selectGender,
    handleChange,
    updateUser,
    imageGalleryLaunch,
  };
};

export default useEditProfile;
