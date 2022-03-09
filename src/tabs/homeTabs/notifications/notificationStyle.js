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
        color:colors.primary,
        fontWeight:'300',
        padding:10
    },
    contentHolder:{
        elevation:1,
        backgroundColor:colors.white,
        width:'95%',
        marginTop:10,
        borderRadius:4,
        alignSelf:'center',
        padding:15,
        flexDirection:'row'
    },
    content:{
        color:colors.darkText,
        fontWeight:'400',
        fontSize:12,
        marginLeft:10,
        width:'73%',
        marginBottom:10
    },
    date:{
        color:colors.midGrey,
        fontWeight:'600',
        marginLeft:10,
        fontSize:12,
    }
});

export default styles;