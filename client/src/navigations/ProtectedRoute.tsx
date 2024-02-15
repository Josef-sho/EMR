import { STORAGE_USER } from 'constants/index';
import { useAppLocation } from 'hooks';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ isAuthenticated }) => {
  const { pathname } = useAppLocation();

  if (!isAuthenticated && !localStorage.getItem(STORAGE_USER)) {
    const previousPage = pathname;
    return <Navigate to="/login" state={{ from: previousPage }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
