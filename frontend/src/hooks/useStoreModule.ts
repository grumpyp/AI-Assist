import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Store } from 'redux';
import { AppDispatch } from '../store';
import { registerModule, unregisterModule } from '../store/dynamic-modules';

export const useStoreModule = ({
  moduleName,
  store,
  shouldUnregisterOnUnmount = true,
}: {
  moduleName: string;
  store: Store;
  shouldUnregisterOnUnmount: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(registerModule({ id: moduleName, store }));

    return () => {
      if (shouldUnregisterOnUnmount) {
        dispatch(unregisterModule({ id: moduleName }));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
