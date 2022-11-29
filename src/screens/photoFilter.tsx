import {
    Canvas,
    Circle,
    Path,
    Rect,
    Skia,
    useSharedValueEffect,
    useValue,
  } from '@shopify/react-native-skia';
  import React from 'react';
  import {Dimensions, StyleSheet, View, Button} from 'react-native';
  import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
  } from 'react-native-gesture-handler';
  import Animated, {
    useAnimatedStyle,
    useSharedValue,
  } from 'react-native-reanimated';
  import {polar2Canvas} from 'react-native-redash';
  import {useNavigation} from '@react-navigation/native'
  
  const {width, height} = Dimensions.get('window');
  
  const ghost = require('../assets/IMG20220429213752.jpg');
  
  const FilterScreen = () => {
    const strokeWidth = 20;
    const center = width / 2;
    const r = (width - strokeWidth) / 2 - 40;
    const startAngle = Math.PI;
    const endAngle = 2 * Math.PI;
    const x1 = center - r * Math.cos(startAngle);
    const y1 = -r * Math.sin(startAngle) + center;
    const x2 = center - r * Math.cos(endAngle);
    const y2 = -r * Math.sin(endAngle) + center;
    const rawPath = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;
    const rawForegroundPath = `M ${x2} ${y2} A ${r} ${r} 1 0 1 ${x1} ${y1}`;
    const skiaBackgroundPath = Skia.Path.MakeFromSVGString(rawPath);
    const skiaForegroundPath = Skia.Path.MakeFromSVGString(rawForegroundPath);
    const navigation = useNavigation();

  
    const movableCx = useSharedValue(x2);
    const movableCy = useSharedValue(y2);
    const previousPositionX = useSharedValue(x2);
    const previousPositionY = useSharedValue(y2);
    const percentComplete = useSharedValue(0);
  
    const skiaCx = useValue(x2);
    const skiaCy = useValue(y2);
    const skiaPercentComplete = useValue(0);
  
    const gesture = Gesture.Pan()
      .onUpdate(({translationX, translationY, absoluteX}) => {
        const oldCanvasX = translationX + previousPositionX.value;
        const oldCanvasY = translationY + previousPositionY.value;
  
        const xPrime = oldCanvasX - center;
        const yPrime = -(oldCanvasY - center);
        const rawTheta = Math.atan2(yPrime, xPrime);
  
        let newTheta;
  
        if (absoluteX < width / 2 && rawTheta < 0) {
          newTheta = Math.PI;
        } else if (absoluteX > width / 2 && rawTheta <= 0) {
          newTheta = 0;
        } else {
          newTheta = rawTheta;
        }
  
        const percent = 1 - newTheta / Math.PI;
        percentComplete.value = percent;
  
        const newCoords = polar2Canvas(
          {
            theta: newTheta,
            radius: r,
          },
          {
            x: center,
            y: center,
          },
        );
  
        movableCx.value = newCoords.x;
        movableCy.value = newCoords.y;
      })
      .onEnd(() => {
        previousPositionX.value = movableCx.value;
        previousPositionY.value = movableCy.value;
      });
  
    useSharedValueEffect(
      () => {
        skiaCx.current = movableCx.value;
        skiaCy.current = movableCy.value;
        skiaPercentComplete.current = percentComplete.value;
      },
      movableCx,
      movableCy,
      percentComplete,
    );
  
    const style = useAnimatedStyle(() => {
      return {height: 600, width: 6000, opacity: percentComplete.value + 0.30};
    }, [percentComplete]);
  
    if (!skiaBackgroundPath || !skiaForegroundPath) {
      return <View />;
    }
  
    return (
      <GestureHandlerRootView style={styles.container}>
        <GestureDetector gesture={gesture}>
          <View style={styles.container}>
            <View style={styles.ghost}>
                <Animated.Image source={ghost} style={style} resizeMode="center" />
                <View style = {{marginTop: 37}}>
                <Button title='Next' onPress={() => {navigation.navigate('AnimatedCard')}}/>
                </View>
                <View style = {{marginTop: 37}}>
                <Button title='Back' onPress={() => {navigation.goBack()}}/>
                </View>
            </View>
            <Canvas style={styles.canvas}>
              <Rect x={0} y={0} width={width} height={height} color="black" />
              <Path
                path={skiaBackgroundPath}
                style="stroke"
                strokeWidth={strokeWidth}
                strokeCap="square"
                color={'pink'}
              />
              <Path
                path={skiaForegroundPath}
                style="stroke"
                strokeWidth={strokeWidth}
                strokeCap="round"
                color={'orange'}
                start={0}
                end={skiaPercentComplete}
              />
              <Circle
                cx={skiaCx}
                cy={skiaCy}
                r={20}
                color="orange"
                style="fill"
              />
              <Circle cx={skiaCx} cy={skiaCy} r={15} color="white" style="fill" />
            </Canvas>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      // padding: 7
    },
    canvas: {
      flex: 1,
    },
    cursor: {
      backgroundColor: 'green',
    },
    ghost: {
      flex: 2,
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default FilterScreen;