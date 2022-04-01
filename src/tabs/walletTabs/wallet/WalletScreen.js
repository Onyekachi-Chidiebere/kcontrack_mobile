import React, {useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import CurrentLocation from '../../../images/currentLocation.svg';
import Notification from '../../../images/notifications.svg';
import MoneyReceived from '../../../images/moneyReceived.svg';
import MoneySent from '../../../images/moneySent.svg';
import styles from './walletStyle';
import {ScrollView} from 'react-native-gesture-handler';
import RequestWithdrawal from '../requestWithdrawal/RequestWithdrawal';
import WithdrawalProcessing from '../withdrawalProccessing/WithdrawalProcessing';
import {useSelector} from 'react-redux';
import {BASE_URL} from '../../../constants/helper';

const WalletScreen = ({navigation}) => {
  const earnings = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const user = useSelector(state => state.user);

  return (
    <View style={styles.background}>
      {showWithdraw && (
        <RequestWithdrawal
          close={() => {
            setShowWithdraw(false);
            setShowProcessing(true);
          }}
        />
      )}
      {showProcessing && (
        <WithdrawalProcessing
          close={() => {
            setShowProcessing(false);
          }}
        />
      )}
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
          <Text style={styles.recentEarning}>Recent Earning</Text>
          <Text style={styles.amount}>CAD 1200.20</Text>
          <Pressable
            onPress={() => setShowWithdraw(true)}
            style={styles.withdrawalBtn}>
            <Text style={styles.withdrawalTxt}>Request for withdrawal</Text>
          </Pressable>
        </View>
        <View style={styles.earningsHolder}>
          <Text style={styles.title}>Daily Earnings</Text>
          {earnings.map((earning, key) => (
            <View key={key} style={styles.container}>
              <View style={styles.containerIcon}>
                <MoneyReceived />
                <View>
                  <Text style={styles.earningDescription}>Withdrawal Mode</Text>
                  <Text style={styles.earningDate}>Jan. 31 2022 08:30am</Text>
                </View>
              </View>
              <View>
                <Text style={styles.earningAmount}>+CAD 550.00</Text>
                <Text style={styles.earningDate}>CAD1200.20</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default WalletScreen;