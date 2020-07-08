import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {
  Provider as AuthProvider,
  Context as AuthContext
} from './src/context/authContext';
import { navigationRef } from './src/navigationRef';

const LoginFlow = createStackNavigator();
const TrackListFlow = createStackNavigator();
const AuthFlow = createBottomTabNavigator();

const trackListFlowComp = () => {
  return (
    <TrackListFlow.Navigator>
      <TrackListFlow.Screen name="TrackList" component={TrackListScreen} />
      <TrackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListFlow.Navigator>
  );
};

const App = () => {
  const { state, localSigninMainApp } = useContext(AuthContext);

  useEffect(() => {
    localSigninMainApp();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {state.token == null ? (
        <LoginFlow.Navigator>
          <LoginFlow.Screen name="Signup" component={SignupScreen} />
          <LoginFlow.Screen name="Signin" component={SigninScreen} />
        </LoginFlow.Navigator>
      ) : (
        <AuthFlow.Navigator>
          <AuthFlow.Screen name="tracklistFlow" component={trackListFlowComp} />
          <AuthFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
          <AuthFlow.Screen name="Account" component={AccountScreen} />
        </AuthFlow.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
