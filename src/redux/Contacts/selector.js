

export const modalSelector = state => state.contacts.modal;
export const modalDataSelector = state => state.contacts.modalData;
export const modalDeleteSelector = state => state.contacts.modalDelete;
export const modalDeleteDataSelector = state => state.contacts.modalDeleteData;
export const themesSelector = state => state.contacts.themes;
export const filterSelector = state => state.contacts.filter;
export const contactsSelector = state => state.contacts.contacts.items;
export const isLoadingSelector = state => state.contacts.contacts.isLoading;
export const isErrorSelector = state => state.contacts.contacts.error;
export const onEditSelector = state => state.contacts.onEdit;
export const nameEditSelector = state => state.contacts.EditName;
export const numberEditSelector = state => state.contacts.EditNumber;
export const idEditSelector = state => state.contacts.EditId;
export const bodySelector = state => state.contacts.body;