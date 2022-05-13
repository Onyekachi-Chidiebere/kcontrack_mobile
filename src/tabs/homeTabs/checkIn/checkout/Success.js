import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from '../../../../images/success.svg';
import styles from './checkoutStyle';

const Success = ({close}) => {
  return (
    <View style={styles.background}>
      <View style={styles.contentHolder}>
        <Icon />
        <Text style={styles.title}>Well Done!</Text>
        <Text style={styles.text}>
          You have completed today’s task, your payment would be updated as soon
          your employer confirms checkout.
        </Text>
        <Pressable onPress={close} style={styles.btn}>
          <Text style={styles.btnTxt}>Ok</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Success;
