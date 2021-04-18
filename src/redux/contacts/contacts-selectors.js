import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.contacts;

const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getFilter, getVisibleContacts, getAllContacts, getLoading };
