import {Store, Action} from "@reduxjs/toolkit";

export const REGISTER_MODULE = '@@REGISTER_MODULE';
export const UNREGISTER_MODULE = '@@UNREGISTER_MODULE';

export interface RegisterModuleAction {
  type: typeof REGISTER_MODULE;
  store: Store,
  id: string
}

export interface UnregisterModuleAction extends Action {
  type: typeof UNREGISTER_MODULE,
  id: string,
}

export type DynamicModuleActionType = RegisterModuleAction | UnregisterModuleAction;


// Action Creators.
export const registerModule = (id: string, store: Store): RegisterModuleAction => ({
  type: REGISTER_MODULE,
  store,
  id,
});

export const unregisterModule = (id: string): UnregisterModuleAction => ({
  type: UNREGISTER_MODULE,
  id,
});
