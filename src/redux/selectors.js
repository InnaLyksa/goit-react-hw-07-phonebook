import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    // console.log('111!');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }
);

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filterContacts = selectFilterValue(state).toLowerCase();
//   console.log('Calculating visible tasks. Now memoized!');
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterContacts)
//   );
// };
