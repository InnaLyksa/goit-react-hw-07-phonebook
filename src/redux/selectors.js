export const getContacts = state => state.contacts.items;

export const getFilterValue = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filterContacts = getFilterValue(state).toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts)
  );
};
