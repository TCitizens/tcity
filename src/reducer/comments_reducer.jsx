import merge from 'lodash/merge';

import { RECEIVE_COMMENT } from '../actions/commentAction';


const comments_reducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state[action.comment.threadId].comments, action.comment}) //[action.comment.id]:action.comment
    default:
      return state;
  }
};

export default comments_reducer;
