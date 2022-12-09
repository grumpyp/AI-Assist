import {Action, Reducer} from "@reduxjs/toolkit";

export interface Loadable {
  loading: boolean;
  loaded: boolean;
  error?: Error;
}


export const DEFAULT_LOADABLE: Loadable = {
  loading: false,
  loaded: false,
  error: undefined,
};

export const handleLoadable = <S extends Loadable, T extends Action & { error?: Error }>(
  reducer: Reducer<S, T>,
  successType: string,
  failureType: string
) => (state: S | undefined, action: T): S => {
  const newState: S = reducer(state, action);

  switch (action.type) {
    case successType:
      return {
        ...newState,
        loading: false,
        loaded: true,
        error: null,
      };
    case failureType:
      return {
        ...newState,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return {
        ...newState,
        loading: true,
        loaded: false,
        error: null,
      };
  }
};
