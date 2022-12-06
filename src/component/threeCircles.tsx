import { Canvas, Group, Circle } from "@shopify/react-native-skia";

export const HelloWorld = () => {
    const size = 256;
    const r = size * 0.33;
    return (
        <Canvas style={{ flex: 1 }}>
        <Group blendMode="multiply">
          <Circle cx={r + 18} cy={r + 18} r={r} color="cyan" />
          <Circle cx={size - r + 18} cy={r + 18} r={r} color="magenta" />
          <Circle
            cx={size/2 + 18}
            cy={size - r + 18}
            r={r}
            color="yellow"
          />
        </Group>
      </Canvas>
    );
  };