import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const addContactsRequest = createAction('contacts/addRequest');
const addContactsSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const delContactsRequest = createAction('contacts/delRequest');
const delContactsSuccess = createAction('contacts/delSuccess');
const delContactsError = createAction('contacts/delError');

const changeFilter = createAction('contacts/changeFilter');

export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactError,
  delContactsRequest,
  delContactsSuccess,
  delContactsError,
  changeFilter,
};
