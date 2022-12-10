// Selectors
import { AppState } from '../index';
import { name } from './index';

export const selectAuthState = (state: AppState) => state[name];

export const selectIsAuthenticated = (state: AppState) => selectAuthState(state).isAuthenticated;

export const selectUser = (state: AppState) => selectAuthState(state).user;

export const selectError = (state: AppState) => selectAuthState(state).error;
