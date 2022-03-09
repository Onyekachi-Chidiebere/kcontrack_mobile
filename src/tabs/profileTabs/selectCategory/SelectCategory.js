import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Arrow from '../../../images/arrBack.svg';
import Check from '../../../images/check.svg';
import Icon from '../../../images/icon.svg';
import styles from './selectCategoryStyle';

const SelectCategory = ({navigation}) =>{
    const categories =['Hospitality','Merchandising','Event','Cleaning','General Labour'];
    const [selectedCategory, setSelectedCategory]=useState(['Hospitality','Merchandising'])
    const selectCategory = (category) => {
        if(selectedCategory.includes(category))
            return setSelectedCategory(old=>old.filter(item => item!=category));
        return setSelectedCategory(old=>[...old,category]);
    }
    return <View>
        <Pressable onPress={()=>navigation.pop()} style={styles.backBtn}>
            <Arrow/>
        </Pressable>
        <Text  style={styles.title}>Select a category</Text>
        <Text style={styles.text}>Choose from the options below your preferred category</Text>
        {categories.map((category,index)=><Pressable key={index} onPress={()=>selectCategory(category)}>
            <View  style={styles.card}>
                <Icon/>
                <Text style={styles.cardText}>{category}</Text>
               <View style={styles.cardIcon}>
               {selectedCategory.includes(category) && <Check/>}
               </View>
            </View>
        </Pressable>
       )}
       <Pressable onPress={()=>navigation.navigate('verify-email')}  style={styles.btn} >
           <Text  style={styles.btnTxt}>Done</Text>
       </Pressable>
    </View>
};

export default SelectCategory;