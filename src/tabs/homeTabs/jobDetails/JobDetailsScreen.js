import React,{useState} from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg';
import Dot from '../../../images/emptyCheck.svg';
import Notification from '../../../images/notifications.svg';
import Background from '../../../images/jobImageBackground.svg';
import styles from './jobDetailsStyle';
import Success from './applicationSent/Success';
import {BASE_URL} from '../../../constants/helper';
import useJobDetails from './useJobDetails';
import CustomAlert from '../../../components/alert/CustomAlert';

const JobDetails = ({navigation, route}) => {
  const job = route.params;
  console.log({job: job.id});
  const {loading, showSuccess, alert, apply} = useJobDetails();
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}
      {showSuccess && <Success close={() => navigation.pop()} />}
      <ScrollView>
        <View style={styles.backgroundImageHolder}>
          <Background />
        </View>
        <View style={styles.titleBar}>
          <Pressable onPress={() => navigation.pop()}>
            <ArrBack />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('notification')}>
            <Notification />
          </Pressable>
        </View>
        <View style={styles.logoHolder}>
          <Image
            style={{
              backgroundColor: 'red',
              height: 100,
              width: 100,
              borderRadius: 10,
              marginBottom: 20,
            }}
            source={{uri: `${BASE_URL}/${job.company.user.picture}`}}
          />
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.location}>{job.city}</Text>
          <Text style={styles.cost}>CAD {job.hourly_rate}/day</Text>
          <Text style={styles.descriptionTitle}>Job Description</Text>
          <Text style={styles.descriptionTxt}>{job.description}</Text>
          <Text style={styles.readMore}>Read more</Text>
          <Text style={styles.descriptionTitle}>Requirements</Text>
          {job.requirements.map((requirement, key) => (
            <View key={key} style={styles.requirementHolder}>
              <Dot height={10} width={10} />
              <Text style={styles.requirementText}>{requirement}</Text>
            </View>
          ))}
          <Text style={styles.descriptionTitle}>Arrival Instructions</Text>
          <Text style={styles.descriptionTxt}>{job.arrival_instructions}</Text>

          <Pressable onPress={() => apply(job.id)} style={styles.btn}>
            <Text style={styles.btnTxt}>
              {loading ? 'Loading...' : 'Accept the job'}
            </Text>
          </Pressable>
        </View>
        <View height={100} />
      </ScrollView>
    </View>
  );
};

export default JobDetails;