import { modalsTypes } from "../actions/modals.actions";

const modalsReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case modalsTypes.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    case modalsTypes.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;  
  }
}

export default modalsReducer;
