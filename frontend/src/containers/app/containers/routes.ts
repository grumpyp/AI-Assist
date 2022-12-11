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
}

export const routes: RouteConfig[] = [
  {
    path: 'dashboard',
    label: 'Dashboard',
    Icon: DashboardIcon,
    Component: Dashboard,
  },
  {
    path: 'history',
    label: 'History',
    Icon: HistoryIcon,
    Component: History,
  },
  {
    path: 'live-calls',
    label: 'Live Calls',
    Icon: PhoneForwardedIcon,
    Component: LiveCalls,
  },
];
