import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Title = ({variant, label, onPress}) => {
  const borderBottomColor = variant === 'primary' ? '#FFCF1B' : '#FFF';
  const borderBottomWidth = variant === 'primary' ? 2 : 0;
  return (
    <View>
      <TouchableOpacity
        style={[styles.titleWrapper, {borderBottomColor, borderBottomWidth}]}>
        <Text style={styles.title}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'auto',
    lineHeight: 30,
  },
});
