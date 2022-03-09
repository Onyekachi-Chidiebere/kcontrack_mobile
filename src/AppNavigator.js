import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './tabs/authTab/landingScreen/LandingScreen';
import SignUp from './tabs/authTab/onBoardScreen/signUp/SignUpScreen';
import SignUpDetails from './tabs/authTab/onBoardScreen/signUp/SignUpDetails';
import VerifyOtp from './tabs/authTab/verifyOtp/VerifyOtp';
import SelectCategory from './tabs/profileTabs/selectCategory/SelectCategory';
import VerifyEmail from './tabs/authTab/verifyEmail/VerifyEmail';
import Login from './tabs/authTab/onBoardScreen/login/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../src/images/profile.svg';
import HomeIcon from '../src/images/home.svg';
import Jobs from '../src/images/work.svg';
import JobsActive from '../src/images/workActive.svg';
import Wallet from '../src/images/wallet.svg';
import WalletActive from '../src/images/walletActive.svg';
import HomeActive from '../src/images/homeActive.svg';
import ProfileActive from '../src/images/profileActive.svg';
import ProfileScreen from './tabs/profileTabs/profileScreen/ProfileScreen';
import {View} from 'react-native';
import CategoryScreen from './tabs/profileTabs/categoryScreen/CategoryScreen';
import PaymentInformation from './tabs/profileTabs/informationScreens/PaymentInformation';
import TaxInformation from './tabs/profileTabs/informationScreens/Taxformation';
import SupportScreen from './tabs/profileTabs/supportScreens/SupportScreens';
import LiveChat from './tabs/profileTabs/supportScreens/liveChat/Chat';
import ContactSupport from './tabs/profileTabs/supportScreens/contactSupport/ContactSupport';
import EditProfile from './tabs/profileTabs/editProfile/EditProfile';
import IdVerification from './tabs/profileTabs/idVerification/IdVerification';
import HomeScreen from './tabs/homeTabs/home/HomeScreen';
import JobDetails from './tabs/homeTabs/jobDetails/JobDetailsScreen';
import Notifications from './tabs/homeTabs/notifications/Notification';
import MyJobs from './tabs/jobTab/myJobs/MyJobs';
import WalletScreen from './tabs/walletTabs/wallet/WalletScreen';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  //all routes in authentia=cation tab
  const AuthNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="landing"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup-details"
          component={SignUpDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="verify-otp"
          component={VerifyOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="select-category"
          component={SelectCategory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="verify-email"
          component={VerifyEmail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  //all routes in profile tab
  const Account = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="edit-profile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="category"
          component={CategoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="payment-info"
          component={PaymentInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tax-info"
          component={TaxInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="support"
          component={SupportScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="contact-support"
          component={ContactSupport}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="id-verification"
          component={IdVerification}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const Home = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="home-tab"
            component={HomeScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="job-details"
            component={JobDetails}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="notification"
            component={Notifications}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
  }
  const MyJob = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="job"
            component={MyJobs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
  }

  const WalletTab = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="wallet-tab"
            component={WalletScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
  }
  const BottomNav = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>{focused ? <HomeActive /> : <HomeIcon />}</View>
            ),
          }}
        />
        <Tab.Screen
          name="My Jobs"
          component={MyJob}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>{focused ? <JobsActive /> : <Jobs />}</View>
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletTab}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>{focused ? <WalletActive /> : <Wallet />}</View>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>{focused ? <ProfileActive /> : <Profile />}</View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="auth"
          component={AuthNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="main"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="chat"
          component={LiveChat}
          options={{headerShown: false}}
        />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;


// import React, { useEffect, useState } from 'react';

// import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

// import SweetAlert from 'react-native-sweet-alert';
// import Swal from 'sweetalert2'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


 
//  const App =()=>{

//   useEffect(()=>{
//     Swal.fire({
//       title: 'Custom width, padding, color, background.',
//       width: 600,
//       padding: '3em',
//       color: '#716add',
//       background: '#fff url(/images/trees.png)',
//       backdrop: `
//         rgba(0,0,123,0.4)
//         url("/images/nyan-cat.gif")
//         left top
//         no-repeat
//       `
//     })
//     SweetAlert.showAlertWithOptions({
//       title: 'thi si title',
//       subTitle: 'sub',
//       confirmButtonTitle: 'yer',
//       confirmButtonColor: '#ff0000',
//       otherButtonTitle: 'Cancel',
//       otherButtonColor: 'black',
//       style: 'error',
//       cancellable: true
//     },
//       callback => console.log('callback'));
//   },[])
 

 
// const [filePath, setFilePath] = useState({});
 

//   // Launch Camera

//  const cameraLaunch = () => {

//     let options = {
//       includeBase64:true,
    

//     };

//   launchCamera(options, async(res) => {

//       console.log('Response = ', res);

 

//       if (res.didCancel) {

//         console.log('User cancelled image picker');

//       } else if (res.error) {

//         console.log('ImagePicker Error: ', res.error);

//       } else if (res.customButton) {

//         console.log('User tapped custom button: ', res.customButton);

//         alert(res.customButton);

//       } else {

//         const source = { uri: res.uri };
//       //  let base64 = await fs.readAsStringAsync(res.assets[0].uri, { encoding: 'base64' });
//         console.log('response', JSON.stringify(res));
//         setFilePath(res.assets[0])
//         // console.log({base64})

//         // this.setState({

//         //   filePath: res,

//         //   fileData: res.data,

//         //   fileUri: res.uri

//         // });

//       }

//     });

//   }

 

//  const imageGalleryLaunch = () => {

//     let options = {
//       includeBase64:true,


//     };

 

//     launchImageLibrary(options, (res) => {

//       console.log('Response = ', res);

 

//       if (res.didCancel) {

//         console.log('User cancelled image picker');

//       } else if (res.error) {

//         console.log('ImagePicker Error: ', res.error);

//       } else if (res.customButton) {

//         console.log('User tapped custom button: ', res.customButton);

//         alert(res.customButton);

//       } else {

//         const source = { uri: res.uri };

//         console.log('response', JSON.stringify(res));
//         setFilePath(res.assets[0])


//         // this.setState({

//         //   filePath: res,

//         //   fileData: res.data,

//         //   fileUri: res.uri

//         // });

//       }

//     });

//   }  

//  console.log({ uri: filePath})


//     return (

//       <View style={styles.container}>

//         <View style={styles.container}>

//           <Image

//             source={{

//               uri: 'data:image/jpeg;base64,' + filePath.data,

//             }}

//             style={{ width: 100, height: 100 }}

//           />

//           <Image

//             source={{ uri: filePath.uri }}

//             style={{ width: 200, height: 200 }}

//           />

//           <Text style={{ alignItems: 'center' }}>

//             {filePath.uri}

//           </Text>

 


 

//           <TouchableOpacity onPress={cameraLaunch} style={styles.button}  >

//               <Text style={styles.buttonText}>Launch Camera Directly</Text>

//           </TouchableOpacity>

 

//           <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}  >

//               <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>

//           </TouchableOpacity>

//         </View>

//       </View>

//     );

//   }


 

// const styles = StyleSheet.create({

//   container: {

//     flex: 1,

//     padding: 30,

//     alignItems: 'center',

//     justifyContent: 'center',

//     backgroundColor: '#fff'

//   },

//   button: {

//     width: 250,

//     height: 60,

//     backgroundColor: '#3740ff',

//     alignItems: 'center',

//     justifyContent: 'center',

//     borderRadius: 4,

//     marginBottom:12    

//   },

//   buttonText: {

//     textAlign: 'center',

//     fontSize: 15,

//     color: '#fff'

//   }

// });
// export default  App;