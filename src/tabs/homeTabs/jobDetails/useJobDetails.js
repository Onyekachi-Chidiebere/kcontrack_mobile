import {useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useSelector} from 'react-redux';

const useJobDetails = () => {
  const user = useSelector(state => state.user);
  const [showSuccess, setShowSuccess] = useState(false);
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return {
    loading,
    alert,
    showSuccess,
    apply,
  };
};

export default useJobDetails;
