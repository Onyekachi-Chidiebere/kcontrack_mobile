import { StyleSheet } from "react-native";
import { colors } from "../../../appTheme";

const styles = StyleSheet.create({
    backBtn:{
        padding:10
    },
    title:{
        fontWeight:'700',
        fontSize:20,
        padding:10,
        color:colors.darkText,
    },
    text:{
        padding:10,
        fontSize:14,
        color:colors.lightText,
    },
    card:{
        width:'90%',
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:colors.white,
        elevation:5,
        borderRadius:4,
        alignItems:'center',
        marginTop:15,
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'space-between'
    },
    cardIcon:{
        width:20,
    },
    cardText:{
        color:colors.lightText,
        fontWeight:'600',
        width:'70%'
    },
    btn:{
        backgroundColor:colors.primary,
        width:'90%',
        alignSelf:'center',
        padding:20,
        alignItems:'center',
        borderRadius:4,
        marginTop:40

    },
    btnTxt:{
        color:colors.white,
        fontWeight:'600',
    }

});

export default styles;