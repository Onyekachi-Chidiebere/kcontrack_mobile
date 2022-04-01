import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useSelector} from 'react-redux';
import CustomAlert from '../../../components/alert/CustomAlert';
import Arrow from '../../../images/arrBack.svg';
import Email from '../../../images/email.svg';
import useVerifyEmail from './useVerifyEmail';
import styles from './verifyEmailStyle';

const VerifyEmail = ({navigation}) => {
  const email = useSelector(state => state.user.email);
  const {handleChange, verifyOtp, userData, alert, loading} = useVerifyEmail();

  return (
    <View>
      {alert && <CustomAlert alert={alert} />}
      <Pressable style={styles.backBtn} onPress={() => navigation.pop()}>
        <Arrow />
      </Pressable>
      <View style={styles.image}>
        <Email />
      </View>
      <Text style={styles.title}>Confirm your Email Address</Text>
      <Text style={styles.sent}>We sent a confirmation email to:</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.sent}>
        Check your email and click on the {'\n'} confirmation link to continue
      </Text>
      <View style={styles.inputHolder}>
        <SmoothPinCodeInput
          password
          mask="﹡"
          cellSize={46}
          cellSpacing={10}
          codeLength={5}
          cellStyle={styles.input}
          cellStyleFocused={styles.focusedInput}
          value={userData.verification_code}
          onTextChange={pin => handleChange('verification_code', pin)}
          onFulfill={verifyOtp}
        />
      </View>
      <Pressable onPress={verifyOtp} style={styles.openEmail}>
        <Text style={styles.openEmailText}>
          {loading ? 'Loading...' : 'Verify Email'}
        </Text>
      </Pressable>
      <Pressable>
        <Text style={styles.resend}>Resend Email</Text>
      </Pressable>
    </View>
  );
};

export default VerifyEmail;