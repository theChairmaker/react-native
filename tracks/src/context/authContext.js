import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // try to sign up via API req

    // if successful, change state to auth, otherwise, raise error
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in
    // update state if successful, if not raise error
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isignedIn: false }
);
