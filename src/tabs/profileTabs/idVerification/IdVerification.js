import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg';
import Check from '../../../images/greenCheck.svg';
import Green from '../../../images/lightGreenCheck.svg';
import NotCheck from '../../../images/emptyCheck.svg';
import Cloud from '../../../images/cloud.svg';
import styles from './idVerificationStyle';
import UploadSuccess from '../editProfile/uploadSuccess/Success';

const IdVerification = ({navigation})=> {
    const [type, setType] = useState(1);
    const [front, setFront] = useState(false);
    const [back, setBack] = useState(false);
    const [success, setSuccess] = useState(false);

    return <View style={styles.background}>
           {success&&<UploadSuccess close={()=>setSuccess(false)}/>}
           <View style={styles.header}>
           <View style={styles.headerTitle}>
                <Pressable onPress={()=>navigation.pop()}>
                    <ArrBack/>
                </Pressable>
                <Text style={styles.title}>ID Verification</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
        <Text style={styles.info}>In order to complete your registration please upload a clear copy of any of the government issued identity cards.</Text>
        <Text style={styles.infoType}>Choose your identity type</Text>
        <View style={styles.typeHolder}>
            <Pressable onPress={()=>setType(1)} style={styles.type}>
                {type===1?<Check/>:<NotCheck/>}
                <Text style={styles.typeText}>
                Passport Bio Page
                </Text>
            </Pressable>
            <Pressable onPress={()=>setType(2)} style={styles.type}>
            {type===2?<Check/>:<NotCheck/>}
                <Text style={styles.typeText}>
                Drivers License
                </Text>
            </Pressable>
        </View>
        <View style={styles.typeHolder}>
            <Pressable onPress={()=>setType(3)} style={styles.type}>
            {type===3?<Check/>:<NotCheck/>}
                <Text style={styles.typeText}>
                Health Card
                </Text>
            </Pressable>
            <Pressable onPress={()=>setType(4)}  style={styles.type}>
            {type===4?<Check/>:<NotCheck/>}
                <Text style={styles.typeText}>
                Permanent Resident Card
                </Text>
            </Pressable>
        </View>

        <View style={styles.line}/>

       {!front?<View>
       <Pressable onPress={()=>setFront(true)} style={styles.uploadContainer}>
            <Cloud/>
            <Text style={styles.uploadTxt}>
            Upload the bio page of passport
            </Text>
        </Pressable>
        <Text style={styles.uploadDescription}>
        Take a clear picture of the bio page of your passport booklet
        </Text>
        <View style={styles.line}/>
       </View>:

        <View  style={styles.selectedDoc}>
            <Text style={styles.selectedTitle}>Passport bio Page*</Text>
            <View style={styles.selectedNameHolder}>
                <Text style={styles.selectedNameTxt}>Owners_passport.pdf</Text>
                <Green/>
            </View>
        </View>}

       {!back? <View>
        <Pressable onPress={()=>setBack(true)} style={styles.uploadContainer}>
            <Cloud/>
            <Text style={styles.uploadTxt}>
            Upload the next page of passport
            </Text>
        </Pressable>
        <Text style={styles.uploadDescription}>
        Take a clear picture of the bio page of your passport booklet
        </Text>
        </View>:
        <View  style={styles.selectedDoc}>
            <Text style={styles.selectedTitle}>Passport bio Next Page*</Text>
            <View style={styles.selectedNameHolder}>
                <Text style={styles.selectedNameTxt}>Owners_passport.pdf</Text>
                <Green/>
            </View>
        </View>}

        <Pressable onPress={()=>{
            if(front&&back)
            return setSuccess(true)
        }} style={front&&back?styles.btnSelected:styles.btn}>
            <Text style={front&&back?styles.btnTxtSelected:styles.btnTxt}>Save</Text>
        </Pressable>
    </View>
};

export default IdVerification;