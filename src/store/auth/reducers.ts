import {DEFAULT_LOADABLE, handleLoadable, Loadable} from '../utils';
import {AuthActionTypes, LOGIN_FAILURE, LOGIN_SUCCESS} from './actions';
import {User} from "../../model";
import {Reducer} from "@reduxjs/toolkit";

export interface AuthState extends Loadable {
  isAuthenticated: boolean;
  user?: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
  ...DEFAULT_LOADABLE,
};

const baseReducer = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    default:
      return state;
  }
};

export const reducer = handleLoadable<AuthState, AuthActionTypes>(
  baseReducer,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
);

