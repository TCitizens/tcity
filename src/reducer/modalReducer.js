import { RECEIVE_MAP_STATE } from '../actions/modalAction';
import merge from 'lodash/merge';

const defaultState = {
  modalState: {
    location: null
  }
}

export const modalReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MAP_STATE:
      newState = merge({}, state, { modalState: action.modalState });
      return newState;
    default:
      return state;
  }
};