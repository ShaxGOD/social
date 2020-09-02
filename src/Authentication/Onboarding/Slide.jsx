import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.52 * height;
const Slide = ({imagePath}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imagePath} />
      </View>
    </View>
  );
};
export default Slide;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: width,
    alignItems: 'center',
  },
});
