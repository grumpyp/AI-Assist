import React from 'react';
import {Navigate} from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectTo: string;
  children: React.ReactNode;
};

export const ProtectedRoute = ({isAuthenticated, redirectTo, children}: ProtectedRouteProps)  => {
  if (isAuthenticated) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to={{pathname: redirectTo}}/>;
  }
};
