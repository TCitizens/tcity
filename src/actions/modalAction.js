export const RECEIVE_MAP_STATE = 'RECEIVE_MAP_STATE';

export const receiveModalMapState = (modalState) => {
  return {
    type: RECEIVE_MAP_STATE,
    modalState
  }
}

export const updateModalMapState = (modalState) => (dispatch) => {
  dispatch(receiveModalMapState(modalState));
  return true;
};