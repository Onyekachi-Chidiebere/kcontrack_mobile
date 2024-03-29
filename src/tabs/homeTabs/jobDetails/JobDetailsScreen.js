import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg';
import Dot from '../../../images/emptyCheck.svg';
import DirectionIcon from '../../../images/directionIcon.svg';
import Notification from '../../../images/notifications.svg';
import Background from '../../../images/jobImageBackground.svg';
import styles from './jobDetailsStyle';
import Success from './applicationSent/Success';
import {BASE_URL} from '../../../constants/helper';
import useJobDetails from './useJobDetails';
import CustomAlert from '../../../components/alert/CustomAlert';
import QRCodeScanner from 'react-native-qrcode-scanner';

const JobDetails = ({navigation, route}) => {
  const job = route.params;
  const {
    loading,
    showSuccess,
    alert,
    apply,
    user,
    locate,
    coordsData,
    setCoordsData,
    showScan,
    setShowScan,
    onScan,
    getCheckinStatus,
    scanning,
  } = useJobDetails(job);

  const isApplied = user.applied_jobs.find(
    ({job_offer}) => job_offer.id === job.job_offer.id,
  );
  const [coords, setCoords] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    if (coordsData) {
      navigation.navigate('job-direction', coordsData);
      setCoordsData(false);
    }
    //check if the job is coming from accepted jobs and check login status;
    if (job.id) getCheckinStatus(job.id);
  }, []);
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}
      {showSuccess && <Success close={() => navigation.pop()} />}
      {showScan && (
        <View
          style={{
            backgroundColor: 'grey',
            height: '100%',
            position: 'absolute',
            zIndex: 5,
          }}>
          <QRCodeScanner
            onRead={onScan}
            bottomContent={
              <Pressable
                onPress={() => setShowScan(false)}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            }
          />
        </View>
      )}
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
            source={{uri: `${BASE_URL}/${job.job_offer.company.user.picture}`}}
          />
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.title}>{job.job_offer.title}</Text>
          <Text style={styles.location}>{job.job_offer.city}</Text>
          <Text style={styles.cost}>CAD {job.job_offer.hourly_rate}/day</Text>
          <Text style={styles.descriptionTitle}>Job Description</Text>
          <Text style={styles.descriptionTxt}>{job.job_offer.description}</Text>
          <Text style={styles.readMore}>Read more</Text>
          <Text style={styles.descriptionTitle}>Requirements</Text>
          {job.job_offer.requirements.map((requirement, key) => (
            <View key={key} style={styles.requirementHolder}>
              <Dot height={10} width={10} />
              <Text style={styles.requirementText}>{requirement}</Text>
            </View>
          ))}
          <Text style={styles.descriptionTitle}>Arrival Instructions</Text>
          <Text style={styles.descriptionTxt}>
            {job.job_offer.arrival_instructions}
          </Text>

          {isApplied ? (
            <View style={styles.directionHolder}>
              <Pressable
                onPress={() => locate(job.job_offer)}
                style={styles.directionBtn}>
                <DirectionIcon />
                <Text style={styles.directionBtnTxt}>
                  {loading ? 'Loading...' : 'Directions'}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setShowScan(true)}
                // onPress={() => navigation.navigate('checkin')}
                style={styles.directionBtn}>
                <Text style={styles.directionBtnTxt}>
                  {scanning ? 'Loading...' : 'Check In'}
                </Text>
              </Pressable>
              <Pressable
                // onPress={() => apply(job.id)}
                onPress={() => {
                  let options = {
                    // year: 'numeric',
                    // month: 'numeric',
                    day: 'numeric',
                  };
                
                }}
                style={styles.cancelBtn}>
                <Text style={styles.cancelBtnTxt}>{'Cancel Job'}</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              disabled={isApplied}
              onPress={() => apply(job.job_offer.id)}
              style={styles.btn}>
              <Text style={styles.btnTxt}>
                {loading ? 'Loading...' : 'Apply'}
              </Text>
            </Pressable>
          )}
        </View>
        <View height={100} />
      </ScrollView>
    </View>
  );
};

export default JobDetails;
