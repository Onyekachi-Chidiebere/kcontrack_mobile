import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ArrBack from '../../../images/whiteArrBack.svg';
import Check from '../../../images/darkCheck.svg';
import Icon from '../../../images/icon.svg';
import styles from './categoryScreenStyle';

const CategoryScreen = ({navigation}) =>{
    const categories =['Hospitality','Merchandising','Event','Cleaning','General Labour'];

    return <View style={styles.background} >
        <View style={styles.header}>
           <View style={styles.headerTitle}>
                <Pressable onPress={()=>navigation.pop()}>
                    <ArrBack/>
                </Pressable>
                <Text style={styles.title}>Categories</Text>
           </View>
            <Pressable>
                <Text style={styles.headerLeft}>Edit</Text>
            </Pressable>
        </View>
        <ScrollView>
            <View style={styles.preferred}>
                <Text style={styles.preferredTxt}>Preferred work categories</Text>
                <Text  style={styles.preferredNumber}>{`(${categories.length})`}</Text>
            </View>   
            {categories.map((category,index)=><Pressable style={styles.categoryHolder} key={index}>
                <Icon/>
                <Text>{category}</Text>
               <View>
               <Check/>
               </View>
        </Pressable>
       )}    
        </ScrollView>
    </View>
};

export default CategoryScreen;