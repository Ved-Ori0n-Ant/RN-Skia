import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  useSharedValueEffect,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import { useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

type BackGroundGradientProps = {
  width: number;
  height: number;
};

const BackGroundGradient: React.FC<BackGroundGradientProps> = React.memo(
  ({width, height}) => {
    const canvasPadding = 40;
    const reAnimatedVal = useSharedValue(0)
    const skiaVal = useValue(0)

    useEffect(() => {
        reAnimatedVal.value = withRepeat( withTiming(10, {duration: 2000}), -1, true )
    },[reAnimatedVal]);

    useSharedValueEffect(() => {
        skiaVal.current = reAnimatedVal.value;
    },reAnimatedVal)

    return (
      <Canvas
        style={{width: width + canvasPadding, height: height + canvasPadding}}>
        <RoundedRect
          x={canvasPadding / 2}
          y={canvasPadding / 2}
          height={height}
          width={width}
          color={'white'}
          r={20}>
          <SweepGradient
            c={vec((width + canvasPadding) / 2, (height + canvasPadding) / 2)}
            colors={['cyan', 'magenta', 'yellow', 'cyan']}
          />
          <BlurMask blur={skiaVal} style={'solid'} />
        </RoundedRect>
      </Canvas>
    );
  },
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'babypink',
  },
});

export {BackGroundGradient};