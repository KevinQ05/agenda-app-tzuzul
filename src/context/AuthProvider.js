import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // https://randomuser.me/api/

  const login = async (email, password) => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setUser(data.results[0]);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  const value = useMemo(() => {
    return { user, login, logout };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const fetchUser = async () => {
  // Todo, checks user from API
  return;
};
