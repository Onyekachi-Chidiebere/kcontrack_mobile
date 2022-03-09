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
    subtitle:{
        width:'90%',
        alignSelf:'center',
        marginTop:20,
        marginBottom:30,
        color:colors.lightText,
        fontWeight:'600',
        fontSize:16,

    },
    input:{
        width:'90%',
        alignSelf:'center',
        marginTop:20,
    },
    btn:{
        backgroundColor:colors.primary,
        padding:15,
        width:'90%',
        alignSelf:'center',
        borderRadius:4,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTxt:{
        color:colors.white,
        fontWeight:'600',
        fontSize:16
    }
});

export default styles;