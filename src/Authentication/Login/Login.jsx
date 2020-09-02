import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
const {width, height} = Dimensions.get('window');
const Login = () => {
  return (
    <LinearGradient
      colors={['#FF5894', '#8441A4']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Title variant="primary" label="ВОЙТИ" />
          <Title variant="secondary" label="ЗАРЕГИСТРИРОВАТЬСЯ" />
        </View>
        <TextInput text="Email" />
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Login;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-around',
    marginTop: height * 0.17,
  },
});
