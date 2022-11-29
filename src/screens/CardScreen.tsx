import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {BackGroundGradient} from '../component/gradientBackGround';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HEIGHT = 256;
const WIDTH = SCREEN_WIDTH * 0.9;

const CARD_HEIGHT = HEIGHT - 11;
const CARD_WIDTH = WIDTH - 11;


const CardScreen = () => {
  const gesture = Gesture.Pan();
  return (
    <View style={styles.container}>
      <BackGroundGradient width={WIDTH} height={HEIGHT} />
      <GestureDetector gesture={gesture}>
      <Animated.View
        style={{
          height: CARD_HEIGHT,
          width: CARD_WIDTH,
          position: 'absolute',
          backgroundColor: 'black',
          borderRadius: 20,
          zIndex: 300,
          transform: [
            {
                perspective: 300,
            },
            {
                rotateX: '5deg',
            },
            {
                rotateY: '5deg',
            }
          ]
        }}
      />
      </GestureDetector>
      {/* <View style = {styles.container}><Text>Cyber Monday</Text></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'black',
    // borderWidth: 1,
    // padding: 377,
    margin: 30
  },
});

export default () => {
    return(
        <GestureHandlerRootView>
            <CardScreen />
        </GestureHandlerRootView>
    )
};
