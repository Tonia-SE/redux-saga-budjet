export const modalsTypes = {
  OPEN_EDIT_MODAL: 'OPEN_EDIT_MODAL',
  CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL',
};

export const openEditModal = (id) => {
  return { type: modalsTypes.OPEN_EDIT_MODAL, payload: { id } };
};

export const closeEditModal = () => {
  return { type: modalsTypes.CLOSE_EDIT_MODAL };
};
