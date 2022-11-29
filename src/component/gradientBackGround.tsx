import { BlurMask, Canvas, RoundedRect, SweepGradient, vec } from "@shopify/react-native-skia";
import React from "react";
import { StyleSheet, View } from 'react-native';

type BackGroundGradientProps = {
    width: number;
    height: number;
};

const BackGroundGradient: React.FC<BackGroundGradientProps> = React.memo(({width, height}) => {
    const canvasPadding = 40;
    return(
        <Canvas style={{width: width + canvasPadding, height: height + canvasPadding}}>
            <RoundedRect x={canvasPadding/2} y={canvasPadding/2} height={height} width={width} color={'white'} r={20} >
                <SweepGradient c={vec((width + canvasPadding)/2, (height + canvasPadding)/2)} colors={['cyan', 'magenta', 'yellow', 'cyan']} />
                <BlurMask blur={16} style={"solid"} />
            </RoundedRect>
        </Canvas>
    )
})

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'babypink'
    }
})

export {BackGroundGradient};