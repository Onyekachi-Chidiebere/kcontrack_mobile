import React,{useState} from 'react';
import { View, Text, Pressable,ScrollView } from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg'
import Logo from '../../../images/jobImage.svg'
import Dot from '../../../images/emptyCheck.svg'
import Notification from '../../../images/notifications.svg'
import Background from '../../../images/jobImageBackground.svg'
import styles from './jobDetailsStyle';
import Success from './applicationSent/Success';

const JobDetails = ({navigation}) =>{
    const [ showSuccess, setShowSuccess]=useState(false);
    return <View style={styles.background}>
        {showSuccess&&<Success close={()=>navigation.pop()}/>}
        <ScrollView>
          <View style={styles.backgroundImageHolder} >
            <Background/>
          </View>
          <View style={styles.titleBar} >
          <Pressable  onPress={()=>navigation.pop()}>
            <ArrBack/>
          </Pressable>
          <Pressable  onPress={()=>navigation.navigate('notification')}>
            <Notification/>
          </Pressable>
          </View>
        <View style={styles.logoHolder}>
            <Logo/>
        </View>
        <View style={styles.contentHolder}>
            <Text style={styles.title}>Construction Worker</Text>
            <Text style={styles.location}>Saskatoon Canada</Text>
            <Text  style={styles.cost}>CAD 20 - 60/day</Text>
            <Text style={styles.descriptionTitle}>Job Description</Text>
            <Text style={styles.descriptionTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do oo tyuri bf eiusmod tempor incididunt ut labore et dolore magna vfj aliqua. Ut enim ad minim veniam, quis nostrud exercitation ghkki ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis fou aute irure dolor in sit amet reprehenderit in voluptate velit esse.</Text>
            <Text style={styles.readMore}>Read more</Text> 
            <Text style={styles.descriptionTitle}>Requirements</Text>   
            <View style={styles.requirementHolder}>
                <Dot height={10} width={10}/>
                <Text  style={styles.requirementText}>Must be able to lift 40lbs of weight to shoulder height unassisted.</Text>
            </View>
            <View style={styles.requirementHolder}>
                <Dot height={10} width={10}/>
                <Text style={styles.requirementText}>Wear appropraite clothings.</Text>
            </View>
            <View style={styles.requirementHolder}>
                <Dot height={10} width={10}/>
                <Text style={styles.requirementText}>Must have creative mind set for construction.</Text>
            </View>
            <Text style={styles.descriptionTitle}>Arrival Instructions</Text>
            <Text style={styles.descriptionTxt}>Ensure you check-in with the manager onsite before you start work and always check out appropriately after work.</Text>

            <Pressable onPress={()=>setShowSuccess(true)} style={styles.btn}>
                <Text style={styles.btnTxt}>Accept the job</Text>
            </Pressable>
        </View>
        <View height={100}/>
        </ScrollView>
    </View>
};

export default JobDetails;