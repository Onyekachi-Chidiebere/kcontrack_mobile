import React from 'react';
import { View,Text, ScrollView, Pressable } from 'react-native';
import Logo from '../../../../images/titledLogo.svg';
import Google from '../../../../images/google.svg';
import Fb from '../../../../images/fb.svg';
import Arrow from '../../../../images/arrBack.svg';
import LinkedIn from '../../../../images/linkedIn.svg';
import styles from '../OnboardingScreenScreenStyle';
import Input from '../../../../components/input/Input';
import useLogin from './useLogin';
import CustomAlert from '../../../../components/alert/CustomAlert';

const Login = ({navigation}) => {
  const {handleChange, userData, loading, loginUser, alert} = useLogin();
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}

      <ScrollView>
        <Pressable onPress={() => navigation.pop()} style={styles.backBtn}>
          <Arrow />
        </Pressable>
        <Logo style={styles.logo} />
        <Text style={styles.title}>Login to your Account</Text>
        <View style={styles.input}>
          <Input
            label="Email Address"
            handleChange={handleChange}
            name="email"
            value={userData.email}
            placeholder={'Email Address'}
          />
        </View>
        <View style={styles.input}>
          <Input
            label="Password"
            handleChange={handleChange}
            value={userData.password}
            name="password"
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>
        <Pressable onPress={loginUser} style={styles.btn}>
          <Text style={styles.btnTxt}>
            {loading ? 'Loading...' : 'Sign in'}
          </Text>
        </Pressable>
        <View style={styles.altHolder}>
          <Text tyle={styles.altDash}>-</Text>
          <Text tyle={styles.altTxt}>Or Sign in with</Text>
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
            onPress={() => navigation.navigate('signup')}>
            Sign Up
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;