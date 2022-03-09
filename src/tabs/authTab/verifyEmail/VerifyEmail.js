import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Arrow from '../../../images/arrBack.svg';
import Email from '../../../images/email.svg';
import styles from './verifyEmailStyle';

const VerifyEmail = ({navigation}) => {
    return <View>
         <Pressable style={styles.backBtn} onPress={()=>navigation.pop()} >
            <Arrow/>
        </Pressable>
        <View style={styles.image} >
            <Email/>
        </View>
        <Text style={styles.title}>Confirm your Email Address</Text>
        <Text style={styles.sent}>We sent a confirmation email to:</Text>
        <Text style={styles.email}>usersemail@gmail.com</Text>
        <Text  style={styles.sent}>Check your email and click on the {'\n'} confirmation link to continue</Text>
        <Pressable onPress={()=>navigation.navigate('login')} style={styles.openEmail}>
            <Text style={styles.openEmailText}>Open Email App</Text>
        </Pressable>
        <Pressable>
            <Text style={styles.resend}>Resend Email</Text>
        </Pressable>
    </View>
};

export default VerifyEmail;