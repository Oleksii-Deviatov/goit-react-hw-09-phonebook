import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../../redux/contacts/contacts-actions';

const contacts = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactsSuccess]: (state, { payload }) => [...state, payload],
  [actions.delContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactsRequest]: () => true,
  [actions.addContactsSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.delContactsRequest]: () => true,
  [actions.delContactsSuccess]: () => false,
  [actions.delContactsError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  contacts,
  loading,
  filter,
  error,
});
