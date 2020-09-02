import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../src/Authentication/Onboarding/Onboarding';
import Welcome from '../src/Authentication/Welcome/Welcome';
import Login from '../src/Authentication/Login/Login';
const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
export default AuthenticationNavigator;
