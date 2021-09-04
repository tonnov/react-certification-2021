import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, SESSION_STORAGE_DATA } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { useGlobal } from '../Global';

const AuthContext = React.createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const { dispatch } = useGlobal();

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(
    (data) => {
      setAuthenticated(true);
      storage.set(AUTH_STORAGE_KEY, true);
      dispatch({ type: 'update_session_data', payload: data });
      storage.set(SESSION_STORAGE_DATA, data);
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    dispatch({ type: 'update_session_data', payload: {} });
    storage.set(SESSION_STORAGE_DATA, {});
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
