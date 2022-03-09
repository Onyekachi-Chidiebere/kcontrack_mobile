import { StyleSheet } from "react-native";
import { colors } from "../../../appTheme";

const styles = StyleSheet.create({
    background:{
        backgroundColor:colors.background,
        flex:1
    },
    header:{
        backgroundColor:colors.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:10
    },
    headerTitle:{
        flexDirection:'row'
    },
    title:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:18,
        marginLeft:10
    },
    headerLeft:{
        color:colors.white,
        fontWeight:'300',
        padding:10
    },
    preferred:{
        width:'95%'   ,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginBottom:10,
    },
    preferredTxt:{
        color:colors.lightText,
        fontWeight:'600',
        fontSize:16,
    },
    preferredNumber:{
        color:colors.primary,
        fontSize:16,
        fontWeight:'700',
    },
    categoryHolder:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:colors.lightGrey,
        borderRadius:4,
        marginBottom:10
    }

});

export default styles;