import React from 'react';
import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectTo: string;
  children: React.ReactNode;
};

export function ProtectedRoute({ isAuthenticated, redirectTo, children }: ProtectedRouteProps) {
  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
  return <Navigate to={{ pathname: redirectTo }} />;
}
