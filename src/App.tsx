import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import { PortfolioApp } from './containers/portfolio';
import { LoginPage, ProtectedRoute } from './components';
import { store } from './store';
import { useAuth, useLocalTheme } from './hooks';
import { NestedApp } from './containers/app';

function WrappedApp() {
  const { isAuthenticated } = useAuth();
  const { theme } = useLocalTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="portfolio" element={<PortfolioApp appPath="portfolio" />} />

        <Route
          path="jl"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/login">
              <NestedApp appPath="jl" />
            </ProtectedRoute>
          }
        />
      </Routes>
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
