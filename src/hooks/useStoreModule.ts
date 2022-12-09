import {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {Store} from "redux";
import {AppDispatch} from "../store";
import {registerModule, RegisterModuleAction, unregisterModule, UnregisterModuleAction} from "../store/dynamic-modules";

function createStoreModule(moduleName: string, store: Store) {
  return {
    register: () => (dispatch: (action: RegisterModuleAction) => void) => {
      dispatch(registerModule(moduleName, store));
    },
    unregister: () => (dispatch: (action: UnregisterModuleAction) => void) => {
      dispatch(unregisterModule(moduleName));
    },
  };
}


export const useStoreModule = ({
                                 moduleName,
                                 store,
                                 shouldUnregisterOnUnmount = true,
                               }: {
                                 moduleName: string,
                                 store: Store,
                                 shouldUnregisterOnUnmount: boolean,
                               }
) => {
  const dispatch = useDispatch<AppDispatch>();
  const storeModule = createStoreModule(moduleName, store);

  useEffect(() => {
    dispatch(storeModule.register());

    return () => {
      if (shouldUnregisterOnUnmount) {
        dispatch(storeModule.unregister());
      }
    };
  }, [dispatch, shouldUnregisterOnUnmount, storeModule]);
};
