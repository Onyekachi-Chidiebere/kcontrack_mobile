import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import Icon from '../../../../images/success.svg';
import Star from '../../../../images/star.svg';
import Close from '../../../../images/close.svg';
import styles from './ratingStyle';

const Rating = ({close}) => {
  return (
    <View style={styles.background}>
      <View style={styles.contentHolder}>
        <View style={styles.titleHolder}>
          <Text style={styles.title}>Review/Rating</Text>
          <Pressable onPress={close} style={styles.closeBtn}>
            <Close />
          </Pressable>
        </View>
        <Icon style={{marginBottom: 20}} />
        <Text style={styles.title}>Construction Company</Text>
        <View style={styles.starHolder}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </View>
        <Text style={styles.text}>Add additional Comments(Optional)</Text>
        <TextInput
          multiline
          placeholder="type here"
          numberOfLines={4}
          style={styles.input}
        />
        <Pressable onPress={close} style={styles.btn}>
          <Text style={styles.btnTxt}>Ok</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Rating;
