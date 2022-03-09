import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg';
import ArrLeft from '../../../images/arrLeft.svg';
import Mail from '../../../images/mail.svg';
import Call from '../../../images/call.svg';
import Chat from '../../../images/chat.svg';
import styles from './supportStyle';

const SupportScreen = ({navigation}) =>{
    return <View>
          <View style={styles.header}>
           <View style={styles.headerTitle}>
                <Pressable onPress={()=>navigation.pop()}>
                    <ArrBack/>
                </Pressable>
                <Text style={styles.title}>Support</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
        <Pressable onPress={()=>navigation.navigate('chat')} style={styles.contentHolder}>
            <Chat/>
            <Text style={styles.contentTxt}>Live Chat</Text>
            <ArrLeft/>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('contact-support')} style={styles.contentHolder}>
            <Mail/>
            <Text  style={styles.contentTxt}>Contact Support</Text>
            <ArrLeft/>
        </Pressable>
        <Pressable  style={styles.contentHolder}>
            <Call/>
            <Text  style={styles.contentTxt}>Emergency Hotline</Text>
            <ArrLeft/>
        </Pressable>
    </View>
};

export default SupportScreen;