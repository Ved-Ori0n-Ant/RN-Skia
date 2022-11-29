import {useNavigation} from '@react-navigation/native';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {HelloWorld} from '../component/threeCircles';

const SkiaScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <HelloWorld />
      <View style={{margin: 37}}>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('Filter');
        }}
        style={{
          backgroundColor: '#5f33e1',
          // padding: 27,
          borderRadius: 13,
          height: 80,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            marginVertical: 13,
          }}>
          Next
        </Text>
      </TouchableOpacity>
      </View>
      <View style={{margin: 37}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: '#5f33e1',
          // padding: 27,
          borderRadius: 13,
          height: 80,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            marginVertical: 13,
          }}>
          Back
        </Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default SkiaScreen;
