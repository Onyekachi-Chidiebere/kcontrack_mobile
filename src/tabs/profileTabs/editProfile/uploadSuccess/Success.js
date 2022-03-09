import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from '../../../../images/success.svg';
import styles from './uploadSuccess';

const Success = ({close}) =>{
    return <View style={styles.background}>
       <View  style={styles.contentHolder}>
           <Icon/>
           <Text style={styles.title}>
                Uploads Successful!
           </Text>
            <Text style={styles.text}>
                Your iD would be verified and you will be notified. with a blue badge in your profile.
            </Text>
            <Pressable onPress={close} style={styles.btn}>
                <Text style={styles.btnTxt}>Done</Text>
            </Pressable>
       </View>
    </View>
};

export default Success;