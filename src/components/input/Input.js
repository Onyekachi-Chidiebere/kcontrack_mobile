import React, { useState } from 'react';
import { View,Text, TextInput,StyleSheet } from "react-native";
import { colors } from '../../appTheme';
const Input = ({label, placeholder, handleChange, name, value, secureTextEntry}) =>{
    const [focused, setFocused] = useState(false)
    return   <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput  
      value={value}
      secureTextEntry={secureTextEntry}
      onBlur={ () =>setFocused(false) }
      onFocus={ () => setFocused(true)}
      style={focused?styles.focused:styles.input} 
      onChangeText={(text)=>handleChange(name,text)}
      placeholder={placeholder}/>
</View>
};

export default Input;

const styles = StyleSheet.create({
    container:{width:'100%'},
    label:{
        position:'absolute',
        top:-10,
        left:5, 
        backgroundColor:colors.background,
        zIndex:2
    },
    focused:{
        borderColor:colors.primary, borderWidth:1,
        backgroundColor:colors.background,
        borderRadius:4
    },
    input:{
        elevation:2,
        borderColor:colors.background, borderWidth:1,
        backgroundColor:colors.background,
        borderRadius:4
    }
})