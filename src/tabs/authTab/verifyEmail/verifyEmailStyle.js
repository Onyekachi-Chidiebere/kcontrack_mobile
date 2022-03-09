import { StyleSheet } from "react-native";
import { colors } from "../../../appTheme";

const styles = StyleSheet.create({
    backBtn:{
        padding:10
    },
    image:{
        alignItems:'center',
        margin:30
    },
    title:{
       fontWeight:'700' ,
       fontSize:20,
       color:colors.darkText,
       alignSelf:'center',
       marginBottom:30,
    },
    sent:{
        fontWeight:'400',
        color:colors.lightText,
        fontSize:16,
        alignSelf:'center',
    },
    email:{
        fontWeight:'600',
        fontSize:16,
        color:colors.darkText,
        alignSelf:'center',
        marginVertical:20
    },
    openEmail:{
        backgroundColor:colors.primary,
        padding:15,
        width:'90%',
        alignSelf:'center',
        borderRadius:4,
        marginVertical:50,
        justifyContent:'center',
        alignItems:'center'
    },
    openEmailText:{
        color:colors.white,
        fontWeight:'600',
        fontSize:16
    },
    resend:{
        color:colors.primary,
        fontWeight:'600',
        fontSize:16,
        alignSelf:'center'
    }
});

export default styles;
