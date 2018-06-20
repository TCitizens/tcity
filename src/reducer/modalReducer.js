import { RECEIVE_MAP_STATE, RECEIVE_THREAD_STATE } from '../actions/modalActions';
import merge from 'lodash/merge';

const defaultState = {
  modalState: {
    location: nul,
    thread: null
  }
}

export const modalReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MAP_STATE:
      newState = merge({}, state, { modalState: action.modalState });
      return newState;
    case RECEIVE_THREAD_STATE:
      newState = merge({}, state, { modalState: action.modalState });
      return newState;
    default:
      return state;
  }
};