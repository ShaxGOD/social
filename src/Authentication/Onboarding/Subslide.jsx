import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';

const Subslide = ({title, description, last, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? 'Начать' : 'Далее'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};
export default Subslide;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    padding: 44,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#6D6D6D',
    textAlign: 'center',
    marginTop: 7,
  },
});
