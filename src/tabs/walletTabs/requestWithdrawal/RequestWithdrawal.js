import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Input from '../../../components/input/Input'
import styles from './requestWithdrawalStyle';
const RequestWithdrawal = ({close}) => {
    return <View style={styles.background}>
        <View  style={styles.container}>            
            <Text style={styles.title}>Enter amount to Withdraw</Text>
            <View  style={styles.input}>
                <Input placeholder='Amount' label='Amount'/>
            </View>
            <Pressable onPress={()=>close()}  style={styles.btn}>
                <Text   style={styles.btnTxt}>Withdraw</Text>
            </Pressable>
        </View>
        <Text> This is request withdrawal</Text>
    </View>
};

export default RequestWithdrawal;