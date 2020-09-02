import React from 'react';
import {View, Text} from 'react-native';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';

const Dot = ({index, currentIndex}) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.6, 1, 0.6],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: '#8441A4',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        transform: [{scale}],
      }}
    />
  );
};
export default Dot;
