import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './contactSupportStyle'
import ArrBack from '../../../../images/whiteArrBack.svg';
import { TextInput } from 'react-native-gesture-handler';

const ContactSupport = ({navigation}) => {
    return <View style={styles.background}>
         <View style={styles.header}>
           <View style={styles.headerTitle}>
                <Pressable onPress={()=>navigation.pop()}>
                    <ArrBack/>
                </Pressable>
                <Text style={styles.title}>Contact Support</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
        <Text  style={styles.inputTitle}>Name</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.inputTitle}>Email Address</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.inputTitle}>Message</Text>
        <TextInput multiline numberOfLines={5} style={styles.input}/>
        <Pressable style={styles.btn}>
            <Text  style={styles.btnTxt}>Send</Text>
        </Pressable>
    </View>
};

export default ContactSupport;