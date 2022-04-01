import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import CustomAlert from '../../../components/alert/CustomAlert';
import Input from '../../../components/input/Input';
import ArrBack from '../../../images/whiteArrBack.svg';
import styles from './paymentInfoStyle';
import useInformation from './useInformation';

const TaxInformation = ({navigation}) => {
  const {
    userData,
    handleChange,
    updateTaxInformation,
    alert,
    loading,
    edit,
    setEdit,
  } = useInformation();
  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Pressable onPress={() => navigation.pop()}>
              <ArrBack />
            </Pressable>
            <Text style={styles.title}>Tax Information</Text>
          </View>
          <Pressable onPress={() => setEdit(!edit)}>
            <Text style={styles.headerLeft}>{edit ? 'Cancel' : 'Edit'}</Text>
          </Pressable>
        </View>
        {edit && (
          <Text style={styles.subtitle}>
            Enter your 9 digits social security number.
          </Text>
        )}
        <View style={styles.input}>
          <Input
            name="social_security_number"
            editable={edit}
            value={userData.social_security_number}
            handleChange={handleChange}
            label="Social Security Number"
            placeholder={'Enter Number here'}
            keyboardType={'numeric'}
          />
        </View>
        {edit && (
          <View style={styles.input}>
            <Input
              name="social_security_number_confirmation"
              value={userData.social_security_number_confirmation}
              handleChange={handleChange}
              label="Confirm Social Security Number"
              placeholder={'Enter Number here'}
              keyboardType={'numeric'}
            />
          </View>
        )}
        {edit && (
          <Pressable onPress={updateTaxInformation} style={styles.btn}>
            <Text style={styles.btnTxt}>{loading ? 'Loading...' : 'Save'}</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default TaxInformation;