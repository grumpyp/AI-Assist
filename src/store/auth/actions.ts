import axios from 'axios';
import {Action, Dispatch} from '@reduxjs/toolkit';
import {User} from '../../model';

// Action type constants
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export interface LoginRequestAction extends Action {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction extends Action {
  type: typeof LOGIN_SUCCESS;
  user: User;
}

export interface LoginFailureAction extends Action {
  type: typeof LOGIN_FAILURE;
  error: Error;
}


export interface LogoutRequestAction extends Action {
  type: typeof LOGOUT_REQUEST;
}

export interface LogoutSuccessAction extends Action {
  type: typeof LOGOUT_SUCCESS;
  user?: User;
}

export interface LogoutFailureAction extends Action {
  type: typeof LOGOUT_FAILURE;
  error: Error;
}


export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;

// Action creators
const loginRequest = (): LoginRequestAction => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user: User): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  user,
});

const loginFailure = (error: any): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  error,
});

const logoutRequest = (): LogoutRequestAction => ({
  type: LOGOUT_REQUEST,
});

const logoutSuccess = (user?: User): LogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
  user,
});

const logoutFailure = (error: any): LogoutFailureAction => ({
  type: LOGOUT_FAILURE,
  error,
});

// Asynchronous action creators
export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post('/api/login', {username, password});
      dispatch(loginSuccess(response.data.user));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(logoutRequest());
    try {
      await axios.post('/api/logout');
      dispatch(logoutSuccess(undefined));
    } catch (error) {
      dispatch(logoutFailure(error));
    }
  };
};
