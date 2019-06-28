import { SIGN_UP_BEGIN, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../ActionTypes/AuthAction'
import AuthAPI from '../../services/AuthAPI';

export const signUp = (user) => {
  return dispatch => {
    // dispatch(SIGN_UP_BEGIN) this should be an action creator 
    AuthAPI.signUp(user).then(data => {
      debugger;
      dispatch(signIn(data.email, user.password));
    }).catch(error => {
      //dispatch(errorACtion)
      console.log(error);
    });
  }
}

export const signIn = (login, password) => {
  return dispatch => {
    AuthAPI.signIn(login, password).then(({token}) => {
      debugger;
      window.localStorage.setItem("token", token);
      console.log(token);
    }).catch(error => console.log(error));
  }
}  