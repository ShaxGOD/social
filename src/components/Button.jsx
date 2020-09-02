import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const Button = ({variant, label, onPress}) => {
  const backgroundColor = variant === 'primary' ? '#FFF' : '#8441A4';
  const color = variant === 'primary' ? '#9144A2' : '#FFF';

  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};
export default Button;
const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    backgroundColor: '#8441A4',
    width: 218,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
