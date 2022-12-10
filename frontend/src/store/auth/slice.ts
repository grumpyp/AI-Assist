import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../model';
import { addLoadableCases, DEFAULT_LOADABLE, Loadable } from '../utils';

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }) => {
    const response = await axios.post('/api/login', { username, password });
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
    builder.addCase(login.fulfilled, (state, action: PayloadAction<User>) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload,
    }));
    addLoadableCases(builder, login);

    builder.addCase(logout.fulfilled, (state) => ({
      ...state,
      isAuthenticated: false,
      user: undefined,
    }));
    addLoadableCases(builder, logout);
  },
});

export const { reducer, name } = authSlice;
