import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';

const initState = { name: null, email: null };

const user = createReducer(initState, {
  [authActions.registrationSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registrationSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registrationError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registrationSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registrationError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const isLoadingUser = createReducer(true, {
  [authActions.noToken]: () => false,

  // [authActions.registrationSuccess]: () => false,
  // [authActions.registrationError]: () => false,
  // [authActions.registrationRequest]: () => true,

  // [authActions.loginSuccess]: () => true,
  // [authActions.loginError]: () => true,
  // [authActions.loginRequest]: () => true,

  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.getCurrentUserRequest]: () => true,

  // [authActions.logoutSuccess]: () => false,
  // [authActions.logoutError]: () => false,
  // [authActions.logoutRequest]: () => true,
});

export default combineReducers({
  isLoadingUser,
  user,
  isAuthenticated,
  token,
  error,
});
