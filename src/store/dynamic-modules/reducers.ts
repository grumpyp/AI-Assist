import {DynamicModuleActionType, REGISTER_MODULE, UNREGISTER_MODULE} from "./actions";

export type DynamicModuleState = {};

export const reducer = (state: DynamicModuleState = {}, action: DynamicModuleActionType): DynamicModuleState => {
  switch (action.type) {
    case REGISTER_MODULE:
      return {
        ...state,
        [action.id]: action.store,
      }
    case UNREGISTER_MODULE:
      return {
        ...state,
        [action.id]: undefined,
      }
    default:
      return state;
  }
};
