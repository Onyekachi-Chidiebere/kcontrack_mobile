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
import {useSelector} from 'react-redux';
import Direction from './tabs/homeTabs/direction/Direction';
import CheckIn from './tabs/homeTabs/checkIn/CheckIn';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const isLoggedIn = useSelector(state => state.user.jwt);
  console.log({isLoggedIn});

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
          name="job-direction"
          component={Direction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="checkin"
          component={CheckIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="notification"
          component={Notifications}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
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
  };

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
  };
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
        {isLoggedIn ? (
          <Stack.Screen
            name="main"
            component={BottomNav}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="auth"
            component={AuthNav}
            options={{headerShown: false}}
          />
        )}

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
