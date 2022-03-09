import {StyleSheet} from 'react-native';
import { colors } from '../../../appTheme';

const styles = StyleSheet.create({
    firstPart:{
        backgroundColor:colors.primary,
        alignItems:'center'
    },
    header:{
        width:'90%',
        marginVertical:10,
        flexDirection:'row'
    },
    headerTxt:{
        color:colors.white,
        marginLeft:10,
        fontWeight:'700',
        fontSize:18
    },
    pictureHolder:{
        // position:'relative',
    },
    camera:{
        backgroundColor:colors.white,
        width:35,
        height:35,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        top:-35,
        left:75
    },
    input:{
        width:'90%',
        alignSelf:'center',
        marginTop:20
    },
    inputHolder:{
        backgroundColor:colors.background,
        borderRadius:10,
        elevation:10,
        width:'95%',
        alignSelf:'center',
        top:-20,
        paddingVertical:20
    },
    btn:{
        width:'90%',
        alignSelf:'center',
        backgroundColor:colors.primary,
        padding:15,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30
    },
    btnTxt:{
        color:colors.white,
        fontWeight:'600',
        fontSize:16
    }

});

export default styles;