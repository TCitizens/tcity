export const RECEIVE_MAP_STATE = 'RECEIVE_MAP_STATE';
export const RECEIVE_THREAD_STATE = 'RECEIVE_THREAD_STATE';

export const receiveModalMapState = (modalState) => {
  return {
    type: RECEIVE_MAP_STATE,
    modalState
  }
}

export const receiveModalThreadState = (modalState) => {
  return {
    type: RECEIVE_THREAD_STATE,
    modalState
  }
}

export const updateModalMapState = (modalState) => (dispatch) => {
  dispatch(receiveModalMapState(modalState));
  return true;
};

export const updateModalThreadState = (modalState) => (dispatch) => {
  dispatch(receiveModalThreadState(modalState));
  return true;
};