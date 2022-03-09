import {StyleSheet} from 'react-native';
import { colors } from '../../../../appTheme';

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
    inputTitle:{
        width:'90%',
        alignSelf:'center',
        fontSize:14,
        fontWeight:'bold',
        color:colors.darkText,
        marginTop:20,
    },
    input:{
        width:'90%',
        alignSelf:'center',
        backgroundColor:colors.lightestGrey,
        borderColor:'#E0E0E0',
        borderWidth:1,
        borderRadius:4,
        color:colors.lightText

    },
    btn:{
        backgroundColor:colors.primary,
        width:'90%',
        alignSelf:'center',
        marginVertical:40,
        padding:15,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
    },
    btnTxt:{
        color:colors.white,
        fontWeight:'600',
        fontSize:16,
    }
});

export default styles;