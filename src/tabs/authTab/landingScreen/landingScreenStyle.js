import {
    StyleSheet,
  } from 'react-native';

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    text: {
      color: '#4F4F4F',
      textAlign: 'center',
      width:'70%',
      marginBottom:60
    },
    title: {
      fontSize: 18,
      color: '#464545',
      fontWeight:'bold',
      textAlign: 'center',
      marginBottom:10,
    },
    activeDot:{
      width:20,
      backgroundColor:'#4F4F4F'
  
    },
    signInBtn:{
      width:'90%',
      padding:20,
      borderRadius: 10,
      backgroundColor:'#2C4EA6',
      display:'flex',
      alignSelf:'center',
      alignItems:'center',
      marginTop:50,
      marginBottom:30,
    },
    signInTxt:{
      fontWeight:'bold',
      color:'#FFFFFF',
    },
    signWarn:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:50,
  
    },
    signUpBtn:{
      fontWeight:'bold',
      color:'#2C4EA6'
    },
    signUpTxt:{
      color:'#4F4F4F'
    }
  });
  
  export default styles;