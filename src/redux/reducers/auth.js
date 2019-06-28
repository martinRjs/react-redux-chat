import { SIGN_UP_BEGIN, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../ActionTypes/AuthAction';

const initialState = {
  user: null,
  loading: false,
  error: false,
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_BEGIN:
      console.log('begin signing up', action);
      return state;
    case SIGN_UP_SUCCESS:
      console.log('sign up sucess');
      return state;
    case SIGN_UP_FAIL:
      console.log('sign up fail');
      return state;
    default:
      return state;
  }
}

export default AuthReducer;