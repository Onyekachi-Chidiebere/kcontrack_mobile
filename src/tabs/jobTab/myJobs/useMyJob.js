import {useState} from 'react';
import axios from 'axios';
import {API_URL} from '../../../constants/helper';
import {useSelector, useDispatch} from 'react-redux';
import {updateAppliedJob} from '../../../actions/userActions';

const useMyJob = () => {
  const user = useSelector(state => state.user);
  const errors = [];
  const [alert, setAlert] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getAppliedJobs = async () => {
    try {
      console.log('getting applied job');
      setLoading(true);
      //ensure all required fields are provided;

      const response = await axios.get(
        `${API_URL}/application/kcontracker/me`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      dispatch(updateAppliedJob(response.data.data));
      //handle success
      //   setJobs(response.data.data);
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
    loading,
    alert,
    user,
    getAppliedJobs,
  };
};

export default useMyJob;
