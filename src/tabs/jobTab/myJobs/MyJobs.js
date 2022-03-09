import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './myJobsStyle';
import Money from '../../../images/money.svg';
import DarkLocation from '../../../images/darkLocation.svg';
import { ScrollView } from 'react-native-gesture-handler';

const MyJobs = ({navigation}) => {
    const [recommmended, setRecommended]= useState(true)
    const jobs = [
        {
            title:'Line Cook',
            amount:50,
            category:'Hospitality',
            location:'Toronto, Canada',
            date:'Jan. 31 2022 08:30am',
            status:1,
        },
        {
            title:'Contruction worker',
            category:'General Labour',
            amount:50,
            location:'Toronto, Canada',
            date:'Jan. 31 2022 08:30am',
            status:2,
        },
        {
            title:'Manager',
            category:'Hospitality',
            amount:50,
            location:'Toronto, Canada',
            date:'Jan. 31 2022 08:30am',
            status:3,
        },
    ];
    return <View>
         <View style={styles.header}>
           <View style={styles.headerTitle}>               
                <Text style={styles.title}>My Jobs</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
       <ScrollView>
       <View  style={styles.btnHolder}>
            <Pressable onPress={()=>setRecommended(true)} style={recommmended?styles.selectedBtn:styles.btn}>
                <Text style={recommmended?styles.selectedBtnTxt:styles.btnTxt}>Recommended</Text>
            </Pressable>
            <Pressable  onPress={()=>setRecommended(false)}  style={recommmended?styles.btn:styles.selectedBtn}>
                <Text style={recommmended?styles.btnTxt:styles.selectedBtnTxt}>Applied Jobs</Text>
            </Pressable>
        </View>
        <View style={styles.emptyContainer}>
                {jobs.map((job, key)=><Pressable onPress={()=>navigation.navigate('job-details')} key={key}  style={styles.jobDetailsHolder}>
                    <View  style={styles.jobDetailsTitle}>
                        <Text  style={styles.jobTitle}>{job.title}</Text>
                        {recommmended?<Text style={styles.jobCategory}>{job.category}</Text>
                        :<Text style={job.status===1?styles.jobPending:job.status===2?styles.jobCompleted:styles.jobCancelled}>{job.status===1?'Pending':job.status===2?'Competed':'Cancelled'}</Text>}
                    </View>
                    <View style={styles.jobMoneyHolder}>
                        <Money/>
                        <Text  style={styles.jobMoneyTxt}>CAD {job.amount}/hr</Text>
                       
                    </View>
                    <View  style={styles.jobLocationTime}>
                        <View style={styles.jobLocation}>
                            <DarkLocation/>
                            <Text  style={styles.jobMoneyTxt}>{job.location}</Text>
                        </View>
                        <Text  style={styles.jobTimeTxt}>
                            {job.date}
                        </Text>
                    </View>
                </Pressable>)}
            </View>
       </ScrollView>
    </View>
};

export default MyJobs;