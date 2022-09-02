import axios from "axios";
import { useState, useEffect } from "react";
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
    login();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
