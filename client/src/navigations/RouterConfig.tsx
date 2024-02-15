// import { Loader } from 'components';
import { useAuth } from 'contexts/AuthProvider';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Path } from './routes';

const Dashboard = lazy(() => import('pages/Dashboard'));
const Login = lazy(() => import('pages/Login'));



const RouterConfig = () => {
  const { isAuthenticated } = useAuth();
  // const isAuthenticated = true
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route
          path={Path.Home}
          element={
            isAuthenticated ? (
              <Navigate to={Path.Dashboard} replace />
            ) : (
              <Navigate to={Path.Login} replace />
            )
          }
        />
        <Route
          path={Path.Login}
          element={isAuthenticated ? <Navigate to={Path.Dashboard} replace /> : <Login />}
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path={Path.Dashboard} element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
