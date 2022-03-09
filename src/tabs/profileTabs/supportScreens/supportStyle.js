import {StyleSheet} from 'react-native';
import { colors } from '../../../appTheme';

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
        color:colors.primary,
        fontWeight:'300',
        padding:10
    },
    contentHolder:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        paddingVertical:20,
        paddingRight:20,
        alignItems:'center'
    },
    contentTxt:{
        width:'75%'
    }
});

export default styles;