import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function useAuthContext() {
  const user = useContext(AuthContext);

  if (user === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }

  return user;
}
