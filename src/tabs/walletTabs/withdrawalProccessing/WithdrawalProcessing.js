import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from '../../../images/dollar.svg';
import styles from './withdrawalProcessingStyle';

const WithdrawalProcessing = ({close}) =>{
    return <View style={styles.background}>
       <View  style={styles.contentHolder}>
           <Icon/>
           <Text style={styles.title}>
                Withdrawal Processing
           </Text>
            <Text style={styles.text}>
            Your wihtdrawal request has been sent and is being processed.
            </Text>
            <Pressable onPress={close} style={styles.btn}>
                <Text style={styles.btnTxt}>Ok</Text>
            </Pressable>
       </View>
    </View>
};

export default WithdrawalProcessing;