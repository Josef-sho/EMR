import { STORAGE_USER } from 'constants/index';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { isUndefined } from 'utils/type';

interface AuthContextI {
  isAuthenticated: boolean;

}

const AuthContext = createContext<AuthContextI | undefined>(undefined);

const AuthProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    false || !!sessionStorage.getItem(STORAGE_USER)
  );


  console.log(setIsAuthenticated)



  const value: AuthContextI = {
    isAuthenticated,

  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (isUndefined(context)) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return { ...context };
};

export default AuthProvider;
