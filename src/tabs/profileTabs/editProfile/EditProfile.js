import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg';
import Camera from '../../../images/camera.svg';
import styles from './editProfileStyle';
import Input, {Select} from '../../../components/input/Input';
import {ScrollView} from 'react-native-gesture-handler';
import useEditProfile from './useEditProfile';
import CustomAlert from '../../../components/alert/CustomAlert';
import {useSelector} from 'react-redux';
import {BASE_URL} from '../../../constants/helper';

const EditProfile = ({navigation}) => {
  const user = useSelector(state => state.user);
  const {
    userData,
    selectGender,
    alert,
    loading,
    filePath,
    handleChange,
    imageGalleryLaunch,
    genderList,
    updateUser,
  } = useEditProfile();
  return (
    <View>
      {alert && <CustomAlert alert={alert} />}
      <ScrollView>
        <View style={styles.firstPart}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.pop()}>
              <ArrBack />
            </Pressable>
            <Text style={styles.headerTxt}>Edit Profile</Text>
          </View>
          <View style={styles.pictureHolder}>
            {filePath.base64 ? (
              <Image
                source={{uri: 'data:image/jpeg;base64,' + filePath.base64}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: 'green',
                }}
              />
            ) : (
              <Image
                style={{
                  backgroundColor: 'red',
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
                source={{uri: `${BASE_URL}/${user.picture}`}}
              />
            )}
            <Pressable onPress={imageGalleryLaunch} style={styles.camera}>
              <Camera />
            </Pressable>
          </View>
        </View>
        <View style={styles.inputHolder}>
          <View style={styles.input}>
            <Input
              handleChange={handleChange}
              editable={!loading}
              label={'Firstname'}
              placeholder={'firstName'}
              name="firstname"
              value={userData.firstname}
            />
          </View>
          <View style={styles.input}>
            <Input
              handleChange={handleChange}
              editable={!loading}
              label={'Lastname'}
              placeholder={'lastname'}
              name="lastname"
              value={userData.lastname}
            />
          </View>
          <View style={styles.input}>
            <Select
              editable={!loading}
              label={'Gender'}
              placeholder={'Gender'}
              name="gender"
              handleSelect={selectGender}
              value={userData.gender ? userData.gender.gender : ''}
              data={genderList}
            />
          </View>
          <View style={styles.input}>
            <Input
              handleChange={handleChange}
              editable={!loading}
              label={'Email Address'}
              placeholder={'email address'}
              name="email"
              value={userData.email}
            />
          </View>
          <View style={styles.input}>
            <Input
              handleChange={handleChange}
              editable={!loading}
              label={'Phone Number'}
              placeholder={'phone number'}
              name="phone"
              value={userData.phone}
            />
          </View>
          <View style={styles.input}>
            <Input
              handleChange={handleChange}
              editable={!loading}
              label={'Postal code'}
              placeholder={'Postal code'}
              name="zipcode"
              value={userData.zipcode}
            />
          </View>
          <Pressable onPress={updateUser} style={styles.btn}>
            <Text style={styles.btnTxt}>{loading ? 'Loading...' : 'Save'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;