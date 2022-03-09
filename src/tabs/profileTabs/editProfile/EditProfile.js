import React from 'react';
import { View,Text, Pressable } from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg'
import User from '../../../images/user.svg'
import Camera from '../../../images/camera.svg'
import styles from './editProfileStyle';
import Input from '../../../components/input/Input';
import { ScrollView } from 'react-native-gesture-handler';

const EditProfile =({navigation})=>{
    return <View>
        <ScrollView>
      <View style={styles.firstPart}>
        <View style={styles.header}>
          <Pressable onPress={()=>navigation.pop()}>
            <ArrBack/>
          </Pressable>
            <Text style={styles.headerTxt}>Edit Profile</Text>
        </View>
        <View style={styles.pictureHolder}>
            <User/>
            <Pressable style={styles.camera}>
                <Camera/>
            </Pressable>
        </View>
      </View>
     <View style={styles.inputHolder}>
     <View style={styles.input}>
          <Input label={'Firstname'} placeholder={'firstName'}/>
      </View>
      <View  style={styles.input}>
          <Input label={'Lastname'} placeholder={'lastname'}/>
      </View>
      <View  style={styles.input}>
          <Input label={'Firstname'} placeholder={'firstName'}/>
      </View>
      <View  style={styles.input}>
          <Input label={'Gender'} placeholder={'Gender'}/>
      </View>
      <View  style={styles.input}>
          <Input label={'Email Address'} placeholder={'email address'}/>
      </View>
      <View  style={styles.input}>
          <Input label={'Phone Number'} placeholder={'phone number'}/>
      </View>
      <View  style={styles.input}>
          <Input label={'Zip code'} placeholder={'zip code'}/>
      </View>
      <Pressable  style={styles.btn}>
          <Text style={styles.btnTxt}>Save</Text>
      </Pressable>
     </View>
     </ScrollView>
    </View>
};

export default EditProfile;