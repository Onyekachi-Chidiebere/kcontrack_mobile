import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import Input from '../../../../components/input/Input';
import Logo from '../../../../images/titledLogo.svg';
import Google from '../../../../images/google.svg';
import Fb from '../../../../images/fb.svg';
import Arrow from '../../../../images/arrBack.svg';
import LinkedIn from '../../../../images/linkedIn.svg';
import styles from '../OnboardingScreenScreenStyle';
import useSignup from './useSignUp';
import CustomAlert from '../../../../components/alert/CustomAlert';
import CountryCode from './CountryCode';

const SignUpDetails = ({navigation, params, param, route}) => {
  const {handleChange, userData, loading, signup, alert} = useSignup();
  const [selectCode, setSelectCode] = useState(false);
  const handleUpdate = () => {
    //update values for the required fields;
    for (const key in route.params) handleChange(key, route.params[key]);
  };

  useEffect(() => {
    console.log('updating');
    handleUpdate();
  }, []);
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}
      {selectCode && (
        <CountryCode
          close={() => setSelectCode(false)}
          select={code => {
            handleChange('country_code', code);
            setSelectCode(false);
          }}
        />
      )}
      <ScrollView>
        <Pressable onPress={() => navigation.pop()} style={styles.backBtn}>
          <Arrow />
        </Pressable>
        <Logo style={styles.logo} />
        <Text style={styles.title}>Create your account</Text>
        <View style={styles.inputDual}>
          <Pressable onPress={() => setSelectCode(true)} style={{width: 70}}>
            <Input
              handleChange={handleChange}
              name="country_code"
              value={userData.country_code}
              label="Code"
              placeholder={'+1'}
              editable={false}
            />
          </Pressable>
          <View style={{width: '75%'}}>
            <Input
              handleChange={handleChange}
              name="phone"
              value={userData.phone}
              label="Phone Number"
              placeholder={'Phone Number'}
            />
          </View>
        </View>
        <View style={styles.input}>
          <Input
            handleChange={handleChange}
            name="zip_code"
            value={userData.zip_code}
            label="Zip Code"
            placeholder={'Zip Code'}
          />
        </View>
        <View style={styles.input}>
          <Input
            secureTextEntry={true}
            handleChange={handleChange}
            name="password"
            value={userData.password}
            handleChange={handleChange}
            label="Password"
            placeholder={'Password'}
          />
        </View>
        <Pressable
          onPress={() => {
            signup();
            // navigation.navigate('verify-otp');
          }}
          style={styles.btn}>
          <Text style={styles.btnTxt}>{loading ? 'Loading...' : 'Next'}</Text>
        </Pressable>
        <View style={styles.altHolder}>
          <Text tyle={styles.altDash}>-</Text>
          <Text tyle={styles.altTxt}>Or Sign up with</Text>
          <Text tyle={styles.altDash}>-</Text>
        </View>
        <View style={styles.cardHolder}>
          <Pressable style={styles.card}>
            <Google />
          </Pressable>
          <Pressable style={styles.card}>
            <LinkedIn />
          </Pressable>
          <Pressable style={styles.card}>
            <Fb />
          </Pressable>
        </View>
        <View style={styles.already}>
          <Text style={styles.alreadyTxt}>Already have an account?</Text>
          <Text
            style={styles.alreadyBtn}
            onPress={() => navigation.navigate('login')}>
            Sign In
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpDetails;
