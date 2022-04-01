import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import CustomAlert from '../../../components/alert/CustomAlert';
import Input from '../../../components/input/Input';
import ArrBack from '../../../images/whiteArrBack.svg';
import styles from './paymentInfoStyle';
import useInformation from './useInformation';

const PaymentInformation = ({navigation}) => {
  const {
    userData,
    handleChange,
    updatePayInformation,
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
            <Text style={styles.title}>Payment Information</Text>
          </View>
          <Pressable onPress={() => setEdit(!edit)}>
            <Text style={styles.headerLeft}>{edit ? 'Cancel' : 'Edit'}</Text>
          </Pressable>
        </View>
        {edit && (
          <Text style={styles.subtitle}>Provide Payment Information</Text>
        )}
        <View style={styles.input}>
          <Input
            editable={edit}
            name="account_number"
            value={userData.account_number}
            handleChange={handleChange}
            label="Bank Account Number"
            placeholder={'Enter Number here'}
            keyboardType={'numeric'}
          />
        </View>
        {edit && (
          <View style={styles.input}>
            <Input
              name="account_number_confirmation"
              value={userData.account_number_confirmation}
              handleChange={handleChange}
              label="Confirm Account Number"
              placeholder={'Enter Number here'}
              keyboardType={'numeric'}
            />
          </View>
        )}
        <View style={styles.input}>
          <Input
            name="transit_number"
            editable={edit}
            value={userData.transit_number}
            handleChange={handleChange}
            label="Transit Number"
            placeholder={'Enter Number here'}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.input}>
          <Input
            name="institution_number"
            editable={edit}
            value={userData.institution_number}
            handleChange={handleChange}
            label="Institution Number"
            placeholder={'Enter Number here'}
            keyboardType={'numeric'}
          />
        </View>
        {edit && (
          <Pressable onPress={updatePayInformation} style={styles.btn}>
            <Text style={styles.btnTxt}>{loading ? 'Loading...' : 'Save'}</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default PaymentInformation;