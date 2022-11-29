import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BackGroundGradient} from '../component/gradientBackGround';
import {useNavigation} from '@react-navigation/native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HEIGHT = 256;
const WIDTH = SCREEN_WIDTH * 0.9;

const CARD_HEIGHT = HEIGHT - 11;
const CARD_WIDTH = WIDTH - 11;

const CardScreen = () => {
  const xRotation = useSharedValue(0);
  const yRotation = useSharedValue(0);

  const gesture = Gesture.Pan()
  
  .onBegin((event) => {
    xRotation.value = withTiming(interpolate(
      event.y,
      [0, CARD_HEIGHT],
      [5, -5],
      Extrapolate.CLAMP,
    ));
    yRotation.value = withTiming(interpolate(
      event.x,
      [0, CARD_WIDTH],
      [-5, 5],
      Extrapolate.CLAMP,
    ));
  })
  .onUpdate((event) => {
    xRotation.value = interpolate(
      event.y,
      [0, CARD_HEIGHT],
      [5, -5],
      Extrapolate.CLAMP,
    );
    yRotation.value = interpolate(
      event.x,
      [0, CARD_WIDTH],
      [-5, 5],
      Extrapolate.CLAMP,
    );
  })
  .onFinalize(() => {
    xRotation.value = withTiming(0)
    yRotation.value = withTiming(0)
  })

  const rStyle = useAnimatedStyle(() => {
    const rotateXValue = `${xRotation.value}deg`;
    const rotateYValue = `${yRotation.value}deg`;
    return {
      transform: [
        {
          perspective: 300,
        },
        {
          rotateX: rotateXValue,
        },
        {
          rotateY: rotateYValue,
        },
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
      <BackGroundGradient width={WIDTH} height={HEIGHT} />
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {
              height: CARD_HEIGHT,
              width: CARD_WIDTH,
              // position: 'absolute',
              // backgroundColor: '#ffe5a4',
              backgroundColor: 'black',
              borderRadius: 20,
              zIndex: 300,
              marginTop: -270,
              marginHorizontal: 25,
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              padding: 7,
            },
            rStyle,
          ]}>
          <Text style = {{color: 'white'}}>Hello World</Text>
          <Text style = {{color: 'white'}}>Hello World</Text>
          <Text style = {{color: 'white'}}>Hello World</Text>
          <Text style = {{color: 'white'}}>Hello World</Text>
        </Animated.View>
      </GestureDetector>
      {/* 
      
      Manual resetting 

      <View style={{marginVertical: 37}}>
        <TouchableOpacity
          onPress={() => {
            xRotation.value = 0;
            yRotation.value = 0;
          }}>
          <Text style={{color: 'white'}}>Cyber Monday</Text>
        </TouchableOpacity>
      </View> 
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: 'black',
        flex: 1,
        padding: 78,
        justifyContent: 'space-around',
      }}>
      <CardScreen /> 
      <CardScreen />
      {/* <BackGroundGradient width={100} height={105} /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AnimatedCircle');
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
    </GestureHandlerRootView>
  );
};