import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import data from '../../../../data/countries';
import Icon from '../../../../images/alertError.svg';
const CountryCode = ({close, select}) => {
  const [countries, setCountries] = useState(data);
  const [querry, setQuerry] = useState('');

  const Item = ({title, code}) => (
    <Pressable
      onPress={() => select(code)}
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <Text style={{width: 50, color: 'black'}}>{code}</Text>
      <Text style={{color: 'black'}}>{title}</Text>
    </Pressable>
  );

  const renderItem = ({item}) => (
    <Item title={item.name} code={item.dial_code} />
  );

  useEffect(() => {
    setCountries(
      data.filter(country =>
        country.name.toLocaleLowerCase().includes(querry.toLocaleLowerCase()),
      ),
    );
  }, [querry]);
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '80%',
          height: '90%',
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <Pressable
          onPress={close}
          style={{
            width: 45,
            alignSelf: 'flex-end',
            paddingTop: 5,
            paddingRight: 10,
          }}>
          <Icon height={40} />
        </Pressable>
        <TextInput
          style={{
            margin: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'grey',
            paddingHorizontal: 10,
            color: 'black',
          }}
          placeholder="Search"
          onChangeText={text => setQuerry(text)}
        />
        <FlatList
          data={countries}
          renderItem={renderItem}
          keyExtractor={item => item.code}
        />
      </View>
    </View>
  );
};
export default CountryCode;
