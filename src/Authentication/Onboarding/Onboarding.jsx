import React, {useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Slide, {SLIDE_HEIGHT} from './Slide.jsx';
import Animated, {multiply, divide} from 'react-native-reanimated';
import Subslide from './Subslide.jsx';
import Dot from './Dot';
import {useValue, onScrollEvent, useScrollHandler} from 'react-native-redash';
const {width, height} = Dimensions.get('window');
const slides = [
  {
    imagePath: require('../../../assets/images/hey.png'),
    title: 'Hello!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    imagePath: require('../../../assets/images/communication.png'),
    title: 'Communication',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  {
    imagePath: require('../../../assets/images/messaging.png'),
    title: 'Messaging',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
];
const Onboarding = () => {
  const scroll = useRef(null);
  const {scrollHandler, x} = useScrollHandler();
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}>
          {slides.map(({imagePath}, index) => (
            <Slide key={index} {...{imagePath}} />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
          ))}
        </View>
        <Animated.View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: width * slides.length,
            transform: [{translateX: multiply(x, -1)}],
          }}>
          {slides.map(({title, description}, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({x: width * (index + 1), animated: true});
                }
              }}
              last={index === slides.length - 1}
              {...{title, description}}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
