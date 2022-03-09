import { StyleSheet } from "react-native";
import { colors } from "../../../appTheme";

const styles=StyleSheet.create({
    background:{
        position:'absolute',
        flex:1,
        width:'100%',
        height:'100%',
        zIndex:2,
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        backgroundColor:colors.white,
        padding:20,
        borderRadius:10,
        width:'90%',
        alignItems:'center'
    },
    title:{
        fontSize:16,
        fontWeight:'700',
        color:colors.darkText
    },
    input:{
        marginTop:15,
        marginBottom:20,
        width:'90%'
    },
    btn:{
        backgroundColor:colors.primary,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    btnTxt:{
     color:colors.white,
     margin:15,
     fontWeight:'600'   ,
     fontSize:16
    }
});

export default styles;