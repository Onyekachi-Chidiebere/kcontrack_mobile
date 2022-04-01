import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import CustomAlert from '../../../components/alert/CustomAlert';
import Arrow from '../../../images/arrBack.svg';
import Check from '../../../images/check.svg';
import Icon from '../../../images/icon.svg';
import styles from './selectCategoryStyle';
import useSelectCategory from './useSelectCategory';

const SelectCategory = ({navigation}) => {
  const phone_number = useSelector(state => state.phone);
  const {
    getCategories,
    selectCategory,
    selectedCategory,
    categories,
    updateCategories,
    loading,
    alert,
  } = useSelectCategory();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View>
      {alert && <CustomAlert alert={alert} />}
      <Pressable onPress={() => navigation.pop()} style={styles.backBtn}>
        <Arrow />
      </Pressable>
      <Text style={styles.title}>Select a category</Text>
      <Text style={styles.text}>
        Choose from the options below your preferred category
      </Text>
      {categories.map((category, index) => (
        <Pressable key={index} onPress={() => selectCategory(category)}>
          <View style={styles.card}>
            <Icon />
            <Text style={styles.cardText}>{category.name}</Text>
            <View style={styles.cardIcon}>
              {selectedCategory.includes(category.name) && <Check />}
            </View>
          </View>
        </Pressable>
      ))}
      <Pressable
        onPress={() => updateCategories(phone_number)}
        style={styles.btn}>
        <Text style={styles.btnTxt}>{loading ? 'Loading...' : 'Done'}</Text>
      </Pressable>
    </View>
  );
};

export default SelectCategory;
