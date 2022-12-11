import React, { useCallback } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Logout as LogoutIcon,
  Chat as ChatIcon,
  ChatBubble as ChatBubbleIcon,
  ChatBubble,
  Insights as InsightsIcon,
} from '@mui/icons-material';
import { NavDrawer } from './components/NavDrawer';
import { routes } from './containers';
import { useAuth } from '../../hooks';

const Dashboard = routes[0].Component;

export function NestedApp({ appPath }: { appPath: string }) {
  const getPath = useCallback((path: string) => `/${appPath}/${path}`, [appPath]);
  const { logoutUser } = useAuth();

  return (
    <NavDrawer
      items={[
        ...routes.map((route) => ({
          label: route.label,
          path: getPath(route.path),
          icon: <route.Icon />,
          divide: route.divide,
        })),
        { label: 'All Chats', path: getPath('chat'), icon: <ChatIcon /> },
        { label: 'Active Chats', path: getPath('activechat'), icon: <ChatBubbleIcon /> },
        {
          label: 'Analytics',
          path: getPath('analytics'),
          icon: <InsightsIcon />,
          bottom: true,
          divide: true,
        },
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
          <Route key={route.path} path={route.path} element={<route.Component />} />
        ))}
        <Route path="/" element={<Navigate to={routes[0].path} />} />
      </Routes>
    </NavDrawer>
  );
}
