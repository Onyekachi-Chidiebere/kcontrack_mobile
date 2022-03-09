import { StyleSheet } from "react-native";
import { colors } from "../../../../appTheme";

const styles = StyleSheet.create({
  background:{
    position:'absolute',
    height:"100%",
    backgroundColor:'rgba(0,0,0, 0.4)',
    zIndex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  contentHolder:{
      width:'90%',
      backgroundColor:colors.white,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      padding:20
  },
  title:{
      fontWeight:'700',
      fontSize:16,
      margin:20,
      color:colors.darkText
  },
  text:{
      color:colors.midGrey,
      fontSize:12,
      width:'80%',
      fontWeight:'600',
      textAlign:'center'
  },
  btn:{
      backgroundColor:colors.primary,
      width:'80%',
      padding:15,
      alignItems:'center',
      borderRadius:4,
      marginVertical:30
  },
  btnTxt:{
      color:colors.white,
      fontSize:16,
      fontWeight:'600',
  }
});

export default styles;