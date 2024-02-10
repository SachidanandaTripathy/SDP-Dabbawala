import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const [user, setUser] = useState(() => cookies.get('user') || null);

  const login = (userData) => {
    console.log("Authprovider");
    console.log(userData);

    const expirationTime = new Date(Date.now() + 2* 60 * 1000);

    cookies.set('user', userData, { path: '/', expires: expirationTime });
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    cookies.remove('user');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
