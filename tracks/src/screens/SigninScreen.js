import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as AuthContext } from '../context/authContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in for tracking"
        errorMessage={state.errorMessage}
        submitBtnTxt="Sign in"
        onSubmit="signin"
      />
      <NavLink navText="Don't have an account? Sign up!" routeName="Signup" />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;
