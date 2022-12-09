import {configureStore} from '@reduxjs/toolkit';
import {reducer as authReducer} from './auth';
import {reducer as dynamicModulesReducer} from './dynamic-modules';


const rootReducer = () => ({
  auth: authReducer,
  dynamicModules: dynamicModulesReducer,
});


export const store = configureStore(
  {
    reducer: rootReducer,
  }
);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

