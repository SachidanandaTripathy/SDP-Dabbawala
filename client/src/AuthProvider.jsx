import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from './AxiosInstance';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const [user, setUser] = useState();

  const login = (userData) => {
    console.log("Authprovider");
    console.log(userData);

    const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
    cookies.remove('token');

    cookies.set('token', userData.token, { path: '/', expires: expirationTime });
    delete userData.token;
    console.log(userData)
    setUser(userData);
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/user');
      console.log(response);
      if (response.data.user) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []
  )

  const logout = () => {
    setUser(null);
    cookies.remove('user');
  };


  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
