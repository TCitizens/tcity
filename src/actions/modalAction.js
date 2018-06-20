export const RECEIVE_MODAL_STATE = 'RECEIVE_MODAL_STATE';

export const receiveModalState = (modalState) => {
  return {
    type: RECEIVE_MODAL_STATE,
    modalState
  };
};

export const updateModalState = (modalState) => (dispatch) => {
  dispatch(receiveModalState(modalState));
  return true;
};
