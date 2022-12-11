import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../model';
import { addLoadableCases, DEFAULT_LOADABLE, Loadable } from '../utils';

export const login = createAsyncThunk(
  'auth/login',
  async ({ username }: { username: string; password: string }) => {
    const response: {
      data: {
        user: User;
      };
    } = await new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            data: {
              user: {
                id: username,
                username,
                email: 'max@mustermann.de',
              },
            },
          }),
        500
      );
    });
    return response.data.user;
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/api/logout');
});

export interface AuthState extends Loadable {
  isAuthenticated: boolean;
  user?: User;
}

const initialState: AuthState = {
  ...DEFAULT_LOADABLE,
  isAuthenticated: false,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addLoadableCases(builder, login, {
      fullfilled: (state, action: PayloadAction<User>) => ({
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }),
    });

    addLoadableCases(builder, logout, {
      fullfilled: (state) => ({
        ...state,
        isAuthenticated: false,
        user: undefined,
      }),
    });
  },
});

export const { reducer, name } = authSlice;
