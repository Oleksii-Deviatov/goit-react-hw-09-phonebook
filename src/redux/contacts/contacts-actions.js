import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchRequest');
export const fetchContactsSuccess = createAction('contacts/fetchSuccess');
export const fetchContactsError = createAction('contacts/fetchError');

export const addContactsRequest = createAction('contacts/addRequest');
export const addContactsSuccess = createAction('contacts/addSuccess');
export const addContactError = createAction('contacts/addError');

export const delContactsRequest = createAction('contacts/delRequest');
export const delContactsSuccess = createAction('contacts/delSuccess');
export const delContactsError = createAction('contacts/delError');

export const changeContactRequest = createAction(
  'contacts/changeContactRequest',
);
export const changeContactSuccess = createAction(
  'contacts/changeContactSuccess',
);
export const changeContactError = createAction('contacts/changeContactError');

export const changeFilter = createAction('contacts/changeFilter');

export const clearContacts = createAction('contacts/clear');
