import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectAuthState } from '../store/auth';
import { AppDispatch } from '../store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated, user, loading, loaded, error } =
    useSelector(selectAuthState);

  const loginUser = (username: string, password: string) => {
    dispatch(login({ username, password }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    isAuthenticated,
    user,
    loading,
    loaded,
    error,
    loginUser,
    logoutUser,
  };
};
