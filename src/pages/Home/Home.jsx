import "./Home.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import TaskCardMain from "../../components/TaskCardMain/TaskCardMain";

export default function Home() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div className="content content-home">
      <TaskCardMain />
    </div>
  );
}
