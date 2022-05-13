import React, {useState} from 'react';
import ArrBack from '../../../images/whiteArrBack.svg';
import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {colors} from '../../../appTheme';

import Pie from 'react-native-pie';
import Success from './checkout/Success';
import Rating from './rating/Rating';

const CheckIn = ({navigation}) => {
  const [success, setSuccess] = useState(false);
  const [rate, setRate] = useState(false);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {success && (
        <Success
          close={() => {
            setSuccess(false);
            setRate(true);
          }}
        />
      )}
      {rate && (
        <Rating
          close={() => {
            setRate(false);
            navigation.pop();
          }}
        />
      )}
      <View style={styles.background}>
        <View>
          <View style={styles.titleBar}>
            <Pressable style={styles.title} onPress={() => navigation.pop()}>
              <ArrBack />
              <Text style={styles.titleText}>Time Clock</Text>
            </Pressable>
          </View>
          <View style={styles.timeholder}>
            <Text>Check In:</Text>
            <Text>09:00am</Text>
          </View>
          <View style={styles.chartHolder}>
            <Pie
              radius={80}
              innerRadius={75}
              sections={[
                {
                  percentage: 60,
                  color: '#2C4EA6',
                },
              ]}
              //   strokeCap={'round'}
              backgroundColor="white"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>2h 20m</Text>
              <Text style={styles.gaugeSubText}>work time left</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkoutHolder}>
          <Text style={styles.checkoutAddress}>
            165 Trent Blvd Saskatoon, Canada
          </Text>
          <Text style={styles.checkoutTime}>09:00am - 05:00pm</Text>
          <Pressable
            onPress={() => setSuccess(true)}
            style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnTxt}>Check out</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleBar: {
    backgroundColor: colors.primary,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    flexDirection: 'row',
  },
  titleText: {
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  timeholder: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 30,
  },
  chartHolder: {
    width: 175,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: colors.darkText,
    fontWeight: 'bold',
    fontSize: 28,
  },
  gaugeSubText: {
    backgroundColor: 'transparent',
    color: colors.darkText,
    fontSize: 14,
  },
  checkoutHolder: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  checkoutAddress: {
    color: colors.darkText,
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 10,
  },
  checkoutTime: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  checkoutBtn: {
    backgroundColor: colors.primary,
    width: '90%',
    marginVertical: 10,
    borderRadius: 5,
    padding: 15,
  },
  checkoutBtnTxt: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
