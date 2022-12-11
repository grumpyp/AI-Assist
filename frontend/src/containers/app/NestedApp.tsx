import React, { useCallback } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { NavDrawer } from './components/NavDrawer';
import { routes } from './containers';
import { useAuth } from '../../hooks';

export function NestedApp({ appPath }: { appPath: string }) {
  const getPath = useCallback((path: string) => `${appPath}/${path}`, [appPath]);
  const { logoutUser } = useAuth();

  return (
    <div>
      <NavDrawer
        items={[
          ...routes.map((route) => ({
            label: route.label,
            path: getPath(route.path),
            icon: <route.Icon />,
          })),
          {
            label: 'Logout',
            path: getPath('logout'),
            icon: <LogoutIcon />,
            onClick: () => logoutUser(),
            bottom: true,
          },
        ]}
      >
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={getPath(route.path)} element={<route.Component />} />
          ))}
          <Route path="/" element={<Navigate to={routes[0].path} />} />
        </Routes>
      </NavDrawer>
    </div>
  );
}
