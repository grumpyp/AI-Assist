import { createSlice, PayloadAction, Store } from '@reduxjs/toolkit';

export type DynamicModuleState = { [id: string]: Store | undefined };

const initialState: DynamicModuleState = {};

const dynamicModuleSlice = createSlice({
  name: 'dynamicModule',
  initialState,
  reducers: {
    registerModule: (state, action: PayloadAction<{ id: string; store: Store }>) => ({
      ...state,
      [action.payload.id]: action.payload.store,
    }),
    unregisterModule: (state, action: PayloadAction<{ id: string }>) => ({
      ...state,
      [action.payload.id]: undefined,
    }),
  },
});

export const { reducer, name } = dynamicModuleSlice;
export const { registerModule, unregisterModule } = dynamicModuleSlice.actions;
