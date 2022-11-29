import {useNavigation} from '@react-navigation/native';
import {Button, View} from 'react-native';
import React from 'react';
import {HelloWorld} from '../component/threeCircles';

const SkiaScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <HelloWorld />
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{marginTop: 37}}>
        <Button
          title="Card"
          onPress={() => {
            navigation.navigate('AnimatedCard');
          }}
        />
      </View>
    </>
  );
};

export default SkiaScreen;
