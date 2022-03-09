import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import User from '../../../images/user.svg';
import CurrentLocation from '../../../images/currentLocation.svg';
import Notification from '../../../images/notifications.svg';
import Search from '../../../images/search.svg';
import Filter from '../../../images/filter.svg';
import Location from '../../../images/location.svg';
import DarkLocation from '../../../images/darkLocation.svg';
import Dashboard from '../../../images/dashboard.svg';
import Money from '../../../images/money.svg';
import EmptyDashboard from '../../../images/emptyDashboard.svg';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './homeScreenStyle';
import CustomAlert from '../../../components/alert/CustomAlert';


const HomeScreen = ({navigation}) => {
    const [data, setData]= useState([])

    const jobs = [
            {
                title:'Line Cook',
                amount:50,
                category:'Hospitality',
                location:'Toronto, Canada',
                date:'Jan. 31 2022 08:30am',
            },
            {
                title:'Contruction worker',
                category:'General Labour',
                amount:50,
                location:'Toronto, Canada',
                date:'Jan. 31 2022 08:30am',
            },
            {
                title:'Manager',
                category:'Hospitality',
                amount:50,
                location:'Toronto, Canada',
                date:'Jan. 31 2022 08:30am',
            },
        ];
    return <View style={styles.background}>
        <CustomAlert alert={{ title:'Success', icon:'question', confirmText:'Ok',message:['alert', 'next alert'] }}/>
        <ScrollView>
        <View style={styles.header}>
            <View style={styles.firstHeader}>
                <User height={32} width={32}/>
                <View style={styles.currentLocation}>
                    <CurrentLocation/>
                    <Text style={styles.currentLocationTxt}>Current Location</Text>
                </View>
                <Pressable onPress={()=>navigation.navigate('notification')}>
                    <Notification/>
                </Pressable>
            </View>
            <View style={styles.searchHolder}>
                <Search/>
                <TextInput style={styles.searchInput} placeholder='Search jobs, Categories'/>
            </View>
            <View style={styles.sortHolder}>
                <Pressable onPress={()=>setData(jobs)} style={styles.sortCard}>
                    <Filter/>
                    <Text style={styles.sortTxt}>Filter</Text>
                </Pressable>
                <Pressable onPress={()=>setData([])} style={styles.sortCard}>
                    <Location/>
                    <Text style={styles.sortTxt}>Location</Text>
                </Pressable>
                <View style={styles.sortCard}>
                    <Dashboard/>
                    <Text style={styles.sortTxt}>Category</Text>
                </View>
            </View>
           
        </View>
        <Text style={styles.emptyAvailable}>Available Jobs</Text>
            <View style={styles.emptyContainer}>
                {data.length===0&&<EmptyDashboard/>}
                {data.map((job, key)=><Pressable onPress={()=>navigation.navigate('job-details')} key={key}  style={styles.jobDetailsHolder}>
                    <View  style={styles.jobDetailsTitle}>
                        <Text  style={styles.jobTitle}>{job.title}</Text>
                        <Text style={styles.jobCategory}>{job.category}</Text>
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

export default HomeScreen;
