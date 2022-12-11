import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { LoginPage, ProtectedRoute } from './components';
import { store } from './store';
import { useAuth, useLocalTheme } from './hooks';
import { NestedApp } from './containers/app';
import { LandingPage } from './containers/LandingPage';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFBC1F',
    width: '100%',
    height: '100%',
  },
});

function WrappedApp() {
  const { isAuthenticated } = useAuth();
  const { theme } = useLocalTheme();
  const styles = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.root}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="ai-assist"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/login">
                <NestedApp appPath="ai-assist" />
              </ProtectedRoute>
            }
          />
          <Route path="home" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </MuiThemeProvider>
  );
}

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <WrappedApp />
      </BrowserRouter>
    </Provider>
  );
}
