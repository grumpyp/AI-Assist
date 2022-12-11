import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LoginPage, ProtectedRoute } from './components';
import { store } from './store';
import { useAuth, useLocalTheme } from './hooks';
import { NestedApp } from './containers/app';
import { LandingPage } from './containers/LandingPage';

function WrappedApp() {
  const { isAuthenticated } = useAuth();
  const { theme } = useLocalTheme();

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: '#FFBC1F',
          width: '100%',
          height: '100%',
        }}
      >
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="ai-assist/*"
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
    </ThemeProvider>
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
