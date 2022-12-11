import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export function NestedApp({ appPath }: { appPath: string }) {
  const getPath = useCallback((path: string) => `${appPath}/${path}`, [appPath]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={getPath('dashboard')}>Dashboard</Route>
      </Routes>
    </div>
  );
}
