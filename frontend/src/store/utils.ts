import { ActionReducerMapBuilder, AsyncThunk, Draft, SerializedError } from '@reduxjs/toolkit';

export interface Loadable {
  loading: boolean;
  loaded: boolean;
  error?: SerializedError;
}

export const DEFAULT_LOADABLE: Loadable = {
  loading: false,
  loaded: false,
  error: undefined,
};

interface ReducerByType<T extends Loadable> {
  fullfilled?: (state: T, action: any) => T;
  rejected?: (state: T, action: any) => T;
  pending?: (state: T, action: any) => T;
}

export function addLoadableCases<S extends Loadable>(
  builder: ActionReducerMapBuilder<S>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thunk: AsyncThunk<any, any, any>,
  reducerByType: ReducerByType<Draft<S>>
) {
  builder.addCase(thunk.pending, (state, action) => {
    let newState = state;
    if (reducerByType.pending) {
      newState = reducerByType.pending(newState, action);
    }

    return {
      ...newState,
      loading: true,
      loaded: false,
      error: undefined,
    };
  });

  builder.addCase(thunk.fulfilled, (state, action) => {
    let newState = state;
    if (reducerByType.fullfilled) {
      newState = reducerByType.fullfilled(newState, action);
    }

    return {
      ...newState,
      loading: true,
      loaded: false,
      error: undefined,
    };
  });

  builder.addCase(thunk.rejected, (state, action) => {
    let newState = { ...state };
    if (reducerByType.rejected) {
      newState = reducerByType.rejected(newState, action);
    }

    return {
      ...newState,
      loading: true,
      loaded: false,
      error: undefined,
    };
  });
}
