import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

const signin = (dispatch) => {
  return () => {
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
