import {useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Polyline from '@mapbox/polyline';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const useJobDetails = job => {
  const user = useSelector(state => state.user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [coordsData, setCoordsData] = useState(false);
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [scanning, setScanning] = useState(false);
  const navigation = useNavigation();

  const apply = async id => {
    try {
      if (!user.picture)
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please update your picture'],
        });

      if (!user.wallet.account_number)
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please update your account number'],
        });
      if (!user.wallet.institution_number)
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Please update your institution number'],
        });
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/application/store`,
        {
          job_offer_id: id,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      //handle success
      setLoading(false);
      setShowSuccess(true);
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
  const onScan = async props => {
    try {
      const data = props.data.split('*');
      console.log({
        date: data[1],
        companyId: data[0],
        job_id: job.id,
        userId: user.id,
        jwt: user.jwt,
      });
      setScanning(true);
      setShowScan(false);
      console.log({
        job_id: job.id,
        date: data[1],
        user_id: user.id,
        company_id: data[0],
      });
      const response = await axios.post(
        `${API_URL}/application/checkin`,
        {
          job_id: job.id,
          date: data[1],
          user_id: user.id,
          company_id: data[0],
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      setScanning(false);
      //navigate to logged in screen
      console.log({response});
      navigation.navigate('checkin');
    } catch (error) {
      setScanning(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: [error.response.data.message],
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Network error'],
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Unable to check in'],
        });
      }
    }
  };

  const locate = job =>
    Geolocation.getCurrentPosition(
      async position => {
        setLoading(true);

        Linking.canOpenURL(
          `https://www.google.com/maps/dir/?api=1&origin=${
            position.coords.latitude
          }},${position.coords.longitude}}&destination=${encodeURI(job.city)}`,
        ).then(supported => {
          setLoading(false);
          if (supported) {
            Linking.openURL(
              `https://www.google.com/maps/dir/?api=1&origin=${
                position.coords.latitude
              },${position.coords.longitude}&destination=${encodeURI(
                job.city,
              )}`,
            );
          } else {
            setAlert({
              close: () => setAlert(false),
              title: 'Error',
              icon: 'error',
              confirmText: 'Ok',
              message: ['Unable to find location'],
            });
            console.log(
              "Don't know how to open URI: " +
                `https://www.google.com/maps/dir/?api=1&origin=${
                  position.coords.latitude
                },${position.coords.longitude}&destination=${encodeURI(
                  job.city,
                )}`,
            );
          }
        });

        // let data = await getDirections(
        //   `${position.coords.latitude}, ${position.coords.longitude}`,
        //   `${job.city}`,
        // );
        // setLoading(false);
        // if (data)
        //   setCoordsData({
        //     longitude: position.coords.longitude,
        //     latitude: position.coords.latitude,
        //     coords: data,
        //   });
      },
      error => {
        setLoading(false);
        console.log({error});
        setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Unable to find location'],
        });
        return false;
      },
      {enableHighAccuracy: true, timeout: 5000},
    );
  const getDirections = async (startLoc, destinationLoc) => {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyCKLnC-xAH8lNbHuCJIZ2PNTw-5RKr4zek`,
      );
      let respJson = await resp.json();
      if (respJson.status === 'ZERO_RESULTS') {
        console.log('cant find location');
        return setAlert({
          close: () => setAlert(false),
          title: 'Error',
          icon: 'error',
          confirmText: 'Ok',
          message: ['Unable to find location'],
        });
        return false;
      }

      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });
      return coords;
    } catch (error) {
      alert(error);
      return error;
    }
  };
  return {
    loading,
    alert,
    showSuccess,
    user,
    coordsData,
    apply,
    locate,
    setCoordsData,
    showScan,
    scanning,
    setShowScan,
    onScan,
  };
};

export default useJobDetails;
