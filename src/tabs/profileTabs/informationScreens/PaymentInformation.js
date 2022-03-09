import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Input from '../../../components/input/Input';
import ArrBack from '../../../images/whiteArrBack.svg';
import styles from './paymentInfoStyle';

const PaymentInformation = ({navigation}) =>{
    return <View style={styles.background} >
            <View style={styles.header}>
           <View style={styles.headerTitle}>
                <Pressable onPress={()=>navigation.pop()}>
                    <ArrBack/>
                </Pressable>
                <Text style={styles.title}>Payment Information</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
        <Text style={styles.subtitle}>Provide Payment Information</Text>
        <View style={styles.input}>
            <Input label='Bank Account Number' placeholder={'Enter Number here'}/>
        </View>
        <View style={styles.input}>
            <Input label='Confirm Account Number' placeholder={'Enter Number here'}/>
        </View>
        <View style={styles.input}>
            <Input label='Transit Number' placeholder={'Enter Number here'}/>
        </View>
        <View style={styles.input}>
            <Input label='Institution Number' placeholder={'Enter Number here'}/>
        </View>
        <Pressable style={styles.btn}>
            <Text style={styles.btnTxt}>Save</Text>
        </Pressable>
    </View>
};

export default PaymentInformation;