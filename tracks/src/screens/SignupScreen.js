import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import TrackDetailScreen from './TrackDetailScreen';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
