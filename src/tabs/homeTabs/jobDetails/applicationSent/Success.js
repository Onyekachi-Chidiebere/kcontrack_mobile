import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from '../../../../images/telegram.svg';
import styles from './applicationSentStyle';

const Success = ({close}) =>{
    return <View style={styles.background}>
       <View  style={styles.contentHolder}>
           <Icon/>
           <Text style={styles.title}>
                Your application has been sent.
           </Text>
            <Text style={styles.text}>
                You would recieve a notification from the Employer
            </Text>
            <Pressable onPress={close} style={styles.btn}>
                <Text style={styles.btnTxt}>Done</Text>
            </Pressable>
       </View>
    </View>
};

export default Success;