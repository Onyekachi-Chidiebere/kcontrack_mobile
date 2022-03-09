import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './notificationStyle';
import ArrBack from '../../../images/whiteArrBack.svg';
import Icon from '../../../images/workActive.svg';
import { ScrollView } from 'react-native-gesture-handler';

const Notifications = ({navigation}) => {

    const notifications = [
        {
            title:'Shell Engineering is looking for: Construction Welder in Toronto, Canada.',
            time:'Yesterday, 09:30am'
        },
        {
            title:'Shell Engineering has confirmed your application for: Construction Welder in Toronto, Canada.',
            time:'Yesterday, 09:30am'
        },
        {
            title:'You have recieved a payment of CAD 60 from Shell Engineering ',
            time:'Yesterday, 09:30am'
        },
        {
            title:'Shell Engineering is looking for: Construction Welder in Toronto, Canada.',
            time:'Yesterday, 09:30am'
        },
        {
            title:'You cancelled Cleaner Job scheduled for DayStar Care ',
            time:'Yesterday, 09:30am'
        },
    ];
    return <View style={styles.background}>
            <View style={styles.header}>
           <View style={styles.headerTitle}>
                <Pressable onPress={()=>navigation.pop()}>
                    <ArrBack/>
                </Pressable>
                <Text style={styles.title}>Notification</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
      <ScrollView>
      {notifications.map((notification, key)=><View key={key} style={styles.contentHolder}>
            <View>
                <Icon/>
            </View>
           <View>
           <Text style={styles.content}>
               {notification.title}
            </Text>
            <Text  style={styles.date}>{notification.time}</Text>
           </View>
        </View>)}
      </ScrollView>
    </View>
}; 

export default Notifications;