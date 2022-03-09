
import React from 'react';
import {
  Text,
  View,
  Pressable,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './landingScreenStyle';
import Url3 from '../../../images/intro_third.svg'
import Url1 from '../../../images/intro_first.svg'
import Url2 from '../../../images/intro_second.svg'



const slides = [
  {
    key: 1,
    title: 'Find Jobs near you',
    text: 'Are you a job seeker looking for work around you?',
    backgroundColor: '#DFEDFF',
    url:Url1,
  },
  {
    key: 2,
    title: 'Select Jobs that fit you',
    text: 'Select job roles that are within your area of expertise.',
    backgroundColor: '#EDD5D6',
    url:Url2,
  },
  {
    key: 3,
    title: 'Get paid easily',
    text: 'You get paid after each task you complete and gain easy access to your money.',
    url:Url3,
    backgroundColor: '#D5E3D0',
  }
];
const LandingScreen=({navigation}) => {
 
      return (
        <>
          <AppLoad/>
         <View>
          <Pressable onPress={()=>navigation.navigate('login')}>
           <View style={styles.signInBtn}>
             <Text style={styles.signInTxt}>Sign In</Text>
           </View>
          </Pressable>
          <View style={styles.signWarn}>
            <Text style={styles.signUpTxt}>You don't have an account yet?</Text>
            <Text style={styles.signUpBtn} onPress={()=>navigation.navigate('signup')}>Sign Up</Text>
          </View>
         </View>
        </>
      );
    };
    class AppLoad extends React.Component {
      _renderItem = ({ item }) => {
        return (
          <View style={[
            styles.slide,
            {
              backgroundColor: item.backgroundColor,
            },
          ]}>
            <item.url/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
      _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}/>
        );
      };
      _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}/>
        );
      };
      _keyExtractor = item => item.title;
      render() {
        return (
           <AppIntroSlider
            renderItem={this._renderItem} 
            data={slides}
            keyExtractor={this._keyExtractor}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
            activeDotStyle={styles.activeDot}
          />
         
        );
      }
    }
  
    export default LandingScreen;