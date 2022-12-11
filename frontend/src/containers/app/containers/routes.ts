import React from 'react';
import {
  Dashboard as DashboardIcon,
  History as HistoryIcon,
  PhoneForwarded as PhoneForwardedIcon,
} from '@mui/icons-material';
import { Dashboard } from './dashboard';
import { History } from './history';
import { LiveCalls } from './live-calls';

interface RouteConfig {
  path: string;
  label: string;
  Icon: React.ComponentType;
  Component: React.ComponentType;
  exact?: boolean;
  divide?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: 'dashboard',
    label: 'Dashboard',
    Icon: DashboardIcon,
    Component: Dashboard,
    divide: true,
  },
  {
    path: 'history',
    label: 'Call History',
    Icon: HistoryIcon,
    Component: History,
  },
  {
    path: 'live-calls',
    label: 'Available Calls',
    Icon: PhoneForwardedIcon,
    Component: LiveCalls,
    divide: true,
  },
];
