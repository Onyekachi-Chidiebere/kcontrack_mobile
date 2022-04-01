import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ArrBack from '../../../images/whiteArrBack.svg';
import Check from '../../../images/greenCheck.svg';
import Green from '../../../images/lightGreenCheck.svg';
import NotCheck from '../../../images/emptyCheck.svg';
import Cloud from '../../../images/cloud.svg';
import styles from './idVerificationStyle';
import UploadSuccess from '../editProfile/uploadSuccess/Success';
import useIdVerification from './useIdVerification';
import CustomAlert from '../../../components/alert/CustomAlert';

const IdVerification = ({navigation}) => {
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    frontPath,
    backPath,
    alert,
    loading,
    type,
    setBackPath,
    setFrontPath,
    imageGalleryLaunch,
    setType,
    updateIdVerification,
  } = useIdVerification();

  return (
    <View style={styles.background}>
      {alert && <CustomAlert alert={alert} />}
      {success && <UploadSuccess close={() => setSuccess(false)} />}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Pressable onPress={() => navigation.pop()}>
            <ArrBack />
          </Pressable>
          <Text style={styles.title}>ID Verification</Text>
        </View>
        <Pressable>
          <Text style={styles.headerLeft}>Edit</Text>
        </Pressable>
      </View>
      <Text style={styles.info}>
        In order to complete your registration please upload a clear copy of any
        of the government issued identity cards.
      </Text>
      <Text style={styles.infoType}>Choose your identity type</Text>
      <View style={styles.typeHolder}>
        <Pressable onPress={() => setType(1)} style={styles.type}>
          {type === 1 ? <Check /> : <NotCheck />}
          <Text style={styles.typeText}>Passport Bio Page</Text>
        </Pressable>
        <Pressable onPress={() => setType(2)} style={styles.type}>
          {type === 2 ? <Check /> : <NotCheck />}
          <Text style={styles.typeText}>Drivers License</Text>
        </Pressable>
      </View>
      <View style={styles.typeHolder}>
        <Pressable onPress={() => setType(3)} style={styles.type}>
          {type === 3 ? <Check /> : <NotCheck />}
          <Text style={styles.typeText}>Health Card</Text>
        </Pressable>
        <Pressable onPress={() => setType(4)} style={styles.type}>
          {type === 4 ? <Check /> : <NotCheck />}
          <Text style={styles.typeText}>Permanent Resident Card</Text>
        </Pressable>
      </View>

      <View style={styles.line} />

      {!frontPath.base64 ? (
        <View>
          <Pressable
            onPress={() => imageGalleryLaunch(setFrontPath)}
            style={styles.uploadContainer}>
            <Cloud />
            <Text style={styles.uploadTxt}>
              Upload the front page of document
            </Text>
          </Pressable>
          <Text style={styles.uploadDescription}>
            Take a clear picture of the front page of your document
          </Text>
          <View style={styles.line} />
        </View>
      ) : (
        <Pressable
          onPress={() => imageGalleryLaunch(setFrontPath)}
          style={styles.selectedDoc}>
          <Text style={styles.selectedTitle}>Document front Page*</Text>
          <View style={styles.selectedNameHolder}>
            <Text style={styles.selectedNameTxt}>image/jpeg</Text>
            <Green />
          </View>
        </Pressable>
      )}

      {!backPath.base64 ? (
        <View>
          <Pressable
            onPress={() => imageGalleryLaunch(setBackPath)}
            style={styles.uploadContainer}>
            <Cloud />
            <Text style={styles.uploadTxt}>
              Upload the back page of document
            </Text>
          </Pressable>
          <Text style={styles.uploadDescription}>
            Take a clear picture of the back page of your document
          </Text>
        </View>
      ) : (
        <Pressable
          onPress={() => imageGalleryLaunch(setBackPath)}
          style={styles.selectedDoc}>
          <Text style={styles.selectedTitle}>Document Back Page*</Text>
          <View style={styles.selectedNameHolder}>
            <Text style={styles.selectedNameTxt}>image/jpeg</Text>
            <Green />
          </View>
        </Pressable>
      )}

      <Pressable
        onPress={() => {
          if (backPath.base64 && frontPath.base64)
            return updateIdVerification();
        }}
        style={
          backPath.base64 && frontPath.base64 ? styles.btnSelected : styles.btn
        }>
        <Text
          style={
            backPath.base64 && frontPath.base64
              ? styles.btnTxtSelected
              : styles.btnTxt
          }>
          {loading?'Loading...':'Save'}
        </Text>
      </Pressable>
    </View>
  );
};

export default IdVerification;