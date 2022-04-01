import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import CurrentLocation from '../../../images/currentLocation.svg';
import Notification from '../../../images/notifications.svg';
import Search from '../../../images/search.svg';
import Filter from '../../../images/filter.svg';
import Location from '../../../images/location.svg';
import DarkLocation from '../../../images/darkLocation.svg';
import Dashboard from '../../../images/dashboard.svg';
import Money from '../../../images/money.svg';
import EmptyDashboard from '../../../images/emptyDashboard.svg';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './homeScreenStyle';
import {BASE_URL} from '../../../constants/helper';
import {useSelector} from 'react-redux';
import moment from 'moment';
import useHome from './useHome';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const user = useSelector(state => state.user);
  const {getJobs, jobs} = useHome();

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.firstHeader}>
            <Image
              style={{
                backgroundColor: 'red',
                height: 32,
                width: 32,
                borderRadius: 50,
              }}
              source={{uri: `${BASE_URL}/${user.picture}`}}
            />
            <View style={styles.currentLocation}>
              <CurrentLocation />
              <Text style={styles.currentLocationTxt}>Current Location</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('notification')}>
              <Notification />
            </Pressable>
          </View>
          <View style={styles.searchHolder}>
            <Search />
            <TextInput
              style={styles.searchInput}
              placeholder="Search jobs, Categories"
            />
          </View>
          <View style={styles.sortHolder}>
            <Pressable onPress={() => setData(jobs)} style={styles.sortCard}>
              <Filter />
              <Text style={styles.sortTxt}>Filter</Text>
            </Pressable>
            <Pressable onPress={() => setData([])} style={styles.sortCard}>
              <Location />
              <Text style={styles.sortTxt}>Location</Text>
            </Pressable>
            <View style={styles.sortCard}>
              <Dashboard />
              <Text style={styles.sortTxt}>Category</Text>
            </View>
          </View>
        </View>
        <Text style={styles.emptyAvailable}>Available Jobs</Text>
        <View style={styles.emptyContainer}>
          {jobs.length === 0 && <EmptyDashboard />}
          {jobs.map((job, key) => (
            <Pressable
              onPress={() => navigation.navigate('job-details', job)}
              key={key}
              style={styles.jobDetailsHolder}>
              <View style={styles.jobDetailsTitle}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCategory}>{job.category}</Text>
              </View>
              <View style={styles.jobMoneyHolder}>
                <Money />
                <Text style={styles.jobMoneyTxt}>CAD {job.hourly_rate}/hr</Text>
              </View>
              <View style={styles.jobLocationTime}>
                <View style={styles.jobLocation}>
                  <DarkLocation />
                  <Text style={styles.jobMoneyTxt}>{job.city}</Text>
                </View>
                <Text style={styles.jobTimeTxt}>
                  {moment(job.start_date).format('MMMM Do YYYY, h:mm a')}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
