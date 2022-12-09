import { configureStore } from '@reduxjs/toolkit';

const rootReducer = () => ({});

export const store = configureStore(
  {
    reducer: rootReducer,
  },
);

export type NestedAppDispatch = typeof store.dispatch;
export type NestedAppState = ReturnType<typeof rootReducer>;
