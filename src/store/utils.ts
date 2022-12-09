import {Action, ActionReducerMapBuilder, AsyncThunk, Reducer, SerializedError} from '@reduxjs/toolkit';

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

export function addLoadableCases<S extends Loadable>(
  builder: ActionReducerMapBuilder<S>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thunk: AsyncThunk<any,any,any>,
) {
  builder.addCase(thunk.pending, (state) => ({
    ...state,
    loading: true,
  }));

  builder.addCase(thunk.pending, (state) => ({
    ...state,
    loading: false,
    loaded: true,
    error: undefined,
  }));

  builder.addCase(thunk.rejected, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
    loaded: false,
  }));
}
