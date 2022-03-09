import {StyleSheet} from 'react-native';
import { colors } from '../../../appTheme';

const styles = StyleSheet.create({
    background:{
        backgroundColor:colors.background,
        // flex:1,
    },
    titleBar:{
        width:'95%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        marginTop:10,
    },
    backgroundImageHolder:{
        position:'absolute',
    },
    logoHolder:{
        width:'100%',
        alignItems:'center',
        top:110
    },
    contentHolder:{
        top:90,
        alignItems:'center'
    },
    title:{
        color:colors.darkText,
        fontWeight:'bold',
        fontSize:18,
        marginVertical:10,
    },
    location:{
        color:colors.lightText,
        fontWeight:'500',
        fontSize:14,
        marginBottom:10,
    },
    cost:{
        color:colors.darkText,
        fontWeight:'500',
        fontSize:18,
        marginBottom:10
    },
    descriptionTitle:{
        width:'95%',
        fontWeight:'bold',
        fontSize:14,
        color:colors.darkText,
        marginBottom:5,
        marginTop:20,

    },
    descriptionTxt:{
        width:'95%',
        fontSize:13,
        color:colors.lightText
    },
    readMore:{
        width:'95%',
        color:'#1A73E8',
        fontWeight:'500',
        textAlign:'right',
        marginTop:5
    },
    requirementHolder:{
        flexDirection:'row',
        width:'95%',
        alignItems:'flex-start'
    },
    requirementText:{
        color:colors.lightText,
        fontSize:13,
        marginLeft:10
    },
    btn:{
        backgroundColor:colors.primary,
        width:'95%',
        borderRadius:4,
        padding:15,
        marginTop:30,
        marginBottom:20,
        alignItems:'center',
    },
    btnTxt:{
        color:colors.white,
        fontSize:16,
        fontWeight:'500',
    }
 
});

export default styles;