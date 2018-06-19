import { RECEIVE_MODAL_STATE } from '../actions/modalActions';
import merge from 'lodash/merge';

const defaultState = {
  modalState: {
    isLoginScreen: true,
    isSignupScreen: null,
    isForgotPasswordScreen: null
  }
}

export const modalReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MODAL_STATE:
      newState = merge({}, state, { modalState: action.modalState });
      return newState;
    default:
      return state;
  }
};