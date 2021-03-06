import { StyleSheet } from "react-native";import { colors } from "../../../appTheme";
;

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:colors.background
    },
    header:{
        backgroundColor:colors.primary
    },
    firstHeader:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:20
    },
    currentLocation:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#365BB9',
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:20
    },
    currentLocationTxt:{
        color:colors.white,
        marginLeft:5,
        fontSize:13,
        fontWeight:'600'
    },
    searchHolder:{
        backgroundColor:colors.white,
        width:'90%',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        borderRadius:5
    },
    searchInput:{
        color:colors.lightText
    },
    sortHolder:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        marginVertical:20,
        justifyContent:'space-between',
    },
    sortCard:{
        flexDirection:'row',
        width:'30%',
        backgroundColor:'#365BB9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:10
    },
    sortTxt:{
        color:colors.white,
        fontSize:13,
        fontWeight:'600',
        marginLeft:5
    },
    emptyAvailable:{
        fontWeight:'700',
        color:colors.midGrey,
        width:'95%',
        marginVertical:10,
        alignSelf:'center'
    },
    emptyContainer:{
        // justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    jobDetailsHolder:{
        marginTop:10,
        backgroundColor:colors.white,
        width:'95%',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.lightGrey,
        borderRadius:4
    },
    jobDetailsTitle:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between',
        marginVertical:10,
    },
    jobTitle:{
        fontWeight:'700',
        color:colors.darkText,
        fontSize:14,
    },
    jobCategory:{
        color:colors.midGrey,
        fontWeight:'600',
        fontSize:10,
        borderWidth:1,
        borderColor:colors.midGrey,
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:2
    },
    jobMoneyHolder:{
        flexDirection:'row',
        width:'90%',
        marginBottom:10,
    },
    jobMoneyTxt:{
        fontWeight:'600',
        fontSize:12,
        marginLeft:10,
        color:colors.midGrey
    },
    jobLocationTime:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        width:'90%',
    },
    jobLocation:{
        flexDirection:'row',
        alignItems:'center',

    },
    jobTimeTxt:{
        fontWeight:'600',
        fontSize:10,
        color:colors.lightText
    }


});

export default styles;