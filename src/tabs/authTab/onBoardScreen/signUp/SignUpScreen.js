import React from 'react';
import { View,Text, ScrollView, Pressable } from 'react-native';
import Input from '../../../../components/input/Input';
import Logo from '../../../../images/titledLogo.svg';
import Google from '../../../../images/google.svg';
import Fb from '../../../../images/fb.svg';
import Arrow from '../../../../images/arrBack.svg';
import LinkedIn from '../../../../images/linkedIn.svg';
import styles from '../OnboardingScreenScreenStyle';
import useSignup from './useSignUp';
import CustomAlert from '../../../../components/alert/CustomAlert';

const SignUp = ({navigation}) => {
    const {
        handleChange, 
        next, 
        userData,
        loading,
        alert,
    }= useSignup();
    return <View style={styles.background}>
        {alert&&<CustomAlert alert={alert}/>}
    <ScrollView>
       <Pressable onPress={()=>navigation.pop()} style={styles.backBtn}>
            <Arrow/>
       </Pressable>
        <Logo style={styles.logo}/>
        <Text style={styles.title}>Create your account</Text>
        <View style={styles.input}>
            <Input handleChange={handleChange} name='first_name' value={userData.first_name} label='First Name' placeholder={'First Name'}/>
        </View>
        <View style={styles.input}>
            <Input name='last_name' handleChange={handleChange} value={userData.last_name}  label='Last Name' placeholder={'Last Name'}/>
        </View>
        <View style={styles.input}>
            <Input label='Email Address' value={userData.email} name='email'   handleChange={handleChange} placeholder={'Email Address'}/>     
        </View>
        <Pressable onPress={next} style={styles.btn}>
                <Text style={styles.btnTxt}>{loading?'Loading...':'Next'}</Text>
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
            <Text  style={styles.alreadyBtn} onPress={()=>navigation.navigate('login')}>Sign In</Text>
        </View>
    </ScrollView>
    </View>
};

export default SignUp;