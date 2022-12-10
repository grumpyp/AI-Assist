import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { name as authName, reducer as authReducer } from './auth';
import { name as dynamicModulesName, reducer as dynamicModulesReducer } from './dynamic-modules';
import { name as siteSettingsName, reducer as siteSettingsReducer } from './site-settings';

const rootReducer = combineReducers({
  [authName]: authReducer,
  [siteSettingsName]: siteSettingsReducer,
  [dynamicModulesName]: dynamicModulesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
