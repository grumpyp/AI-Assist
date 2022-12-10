import { createTheme } from '@material-ui/core/styles';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, toggleDarkMode } from '../store/site-settings';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2B4162',
      light: '#667C8E',
      dark: '#00203A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FA9F42',
      light: '#FFCB7F',
      dark: '#C57D11',
      contrastText: '#000000',
    },
    error: {
      main: '#d32f2f',
      light: '#ef9a9a',
      dark: '#b71c1c',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffc107',
      light: '#fff59d',
      dark: '#c79100',
      contrastText: '#000000',
    },
    info: {
      main: '#26c6da',
      light: '#b2ebf2',
      dark: '#0097a7',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#a5d6a7',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#667C8E',
      light: '#2B4162',
      dark: '#00203A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFCB7F',
      light: '#FA9F42',
      dark: '#C57D11',
      contrastText: '#000000',
    },
    error: {
      main: '#ef9a9a',
      light: '#d32f2f',
      dark: '#b71c1c',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#fff59d',
      light: '#ffc107',
      dark: '#c79100',
      contrastText: '#000000',
    },
    info: {
      main: '#b2ebf2',
      light: '#26c6da',
      dark: '#0097a7',
      contrastText: '#ffffff',
    },
    success: {
      main: '#a5d6a7',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const useLocalTheme = () => {
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const currentTheme = useMemo(() => {
    if (isDarkMode) {
      return darkTheme;
    }
    return lightTheme;
  }, [isDarkMode]);

  const setDarkMode = useCallback(
    (darkMode: boolean) => {
      if (isDarkMode !== darkMode) {
        dispatch(toggleDarkMode());
      }
    },
    [isDarkMode, dispatch]
  );

  return { theme: currentTheme, darkMode: isDarkMode, setDarkMode };
};
