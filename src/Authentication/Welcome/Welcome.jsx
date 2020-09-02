import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button';
const {width, height} = Dimensions.get('window');
const Welcome = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#FF5894', '#8441A4']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainText}>inTouch</Text>
        <Button
          label="Войти"
          onPress={() => navigation.navigate('Login')}
          variant="primary"
        />
        <Button
          label="Зарегистрироваться"
          // onPress={() => navigation.navigate('SignUp')}
          variant="secondary"
        />
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFF',
    marginTop: height * 0.3,
    marginBottom: height * 0.25,
  },
});
