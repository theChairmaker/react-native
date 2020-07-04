import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        submitBtnTxt="Sign up"
        errorMessage={state.errorMessage}
        headerText="Sign up for tracking"
        onSubmit={signup}
      />
      <NavLink
        navText="Already have an account? Sign in instead."
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
