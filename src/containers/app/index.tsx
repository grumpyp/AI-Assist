import React, {useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

export function NestedApp({appPath}: { appPath: string }) {
  const getPath = useCallback((path: string) => `${appPath}/${path}`, [appPath]);

  return (
    <MuiThemeProvider theme={theme}>
      <Routes>
        <Route path={getPath('dashboard')}>
          Dashboard
        </Route>
      </Routes>
    </MuiThemeProvider>
  );
}
