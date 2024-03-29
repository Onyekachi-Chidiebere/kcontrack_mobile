import React ,{useState} from 'react';
import {View, Text, Pressable, Switch, ScrollView, Image} from 'react-native';
import Safe from '../../../images/safe.svg';
import Left from '../../../images/arrLeft.svg';
import styles from './profileScreenStyle';
import {useSelector} from 'react-redux';
import {BASE_URL} from '../../../constants/helper';

const ProfileScreen = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
      <View>
        <View style={styles.firstBaackground}>
          <Text style={styles.profileTitle}>Profile</Text>
          <View>
            <Image
              style={{
                backgroundColor: 'red',
                height: 70,
                width: 70,
                borderRadius: 50,
              }}
              source={{uri: `${BASE_URL}/${user.picture}`}}
            />
          </View>
          <Text
            style={styles.name}>{`${user.last_name}  ${user.first_name}`}</Text>
          <Pressable
            onPress={() => navigation.navigate('edit-profile')}
            style={styles.editBtn}>
            <Text style={styles.editTxt}>Edit Profile</Text>
          </Pressable>
          <Pressable style={styles.backCheck}>
            <Safe />
            <Text style={styles.checkTxt}>Background Check</Text>
          </Pressable>
        </View>
        <View style={styles.secondPart}>
          <View style={styles.overflow}>
            <Text style={styles.title}>Option</Text>
            <Pressable style={styles.contentHolder}>
              <Text style={styles.content}>Availability</Text>
              <Switch
                trackColor={{false: '#BDBDBD   ', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#2C4EA6' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('category')}
              style={styles.contentHolder}>
              <Text style={styles.content}>Categories</Text>
              <View style={styles.contentIcon}>
                <Left />
              </View>
            </Pressable>
            <Text style={styles.title}>Account</Text>
            <Pressable
              onPress={() => navigation.navigate('id-verification')}
              style={styles.contentHolder}>
              <Text style={styles.content}>ID Verification</Text>
              <View style={styles.contentIcon}>
                <Left />
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('payment-info')}
              style={styles.contentHolder}>
              <Text style={styles.content}>Payment Information</Text>
              <View style={styles.contentIcon}>
                <Left />
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('tax-info')}
              style={styles.contentHolder}>
              <Text style={styles.content}>Tax Information</Text>
              <View style={styles.contentIcon}>
                <Left />
              </View>
            </Pressable>
            <Text style={styles.title}>General</Text>
            <Pressable
              onPress={() => navigation.navigate('support')}
              style={styles.contentHolder}>
              <Text style={styles.content}>Support</Text>
              <View style={styles.contentIcon}>
                <Left />
              </View>
            </Pressable>
            <Pressable style={styles.contentHolder}>
              <Text style={styles.content}>Terms & Conditions</Text>
              <View style={styles.contentIcon}>
                <Left />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;