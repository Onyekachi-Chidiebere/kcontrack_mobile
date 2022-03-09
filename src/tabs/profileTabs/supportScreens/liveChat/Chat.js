import React from 'react';
import { View,Pressable, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ArrBack from '../../../../images/whiteArrBack.svg';
import Smile from '../../../../images/smile.svg';
import Send from '../../../../images/send.svg';
import User from '../../../../images/user.svg';
import styles from './chatStyles';

const Chat = ({navigation}) => {
    const chats = [
        {
            chat:'Would you prefer we call you 1hr before time? ',
            time:'12:45 pm',
            sent:false
        },
        {
            chat:'Hi , thanks for the reminder ',
            time:'12:45 pm',
            sent:true
        },
    ]
    return <View style={styles.background}>
         <View style={styles.header}>
           <View style={styles.headerTitle}>
                <Pressable onPress={()=>navigation.pop()}>
                    <ArrBack/>
                </Pressable>
                <Text style={styles.title}>Live Chat</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
        <View  style={styles.chatBody} >
            <ScrollView>
                {chats.map((chat,key)=>  <View key={key}  style={chat.sent?styles.sentCard:styles.chatCard}>
                    <User width={40} height={40}/>
                    <View >
                        <Text style={chat.sent?styles.sentText:styles.chatText}>{chat.chat}</Text>
                        <Text style={chat.sent?styles.sentTime:styles.chatTime}>{chat.time}</Text>
                    </View>
                </View>)}
            </ScrollView>
            <View  style={styles.chatInput}>
                <View  style={styles.input}>
                    <Smile/>
                    <TextInput style={styles.inputEntry} placeholder='Message'/>
                </View>
                <Send/>
            </View>
        </View>
    </View>
};

export default Chat;