import "./Home.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import TaskCardMain from "../../components/TaskCardMain/TaskCardMain";
// Mock for dev
const tasks = [
  {
    name: "Parcial Presencial EDP",
  },
  {
    name: "Implementar funcionalidad: Task Manager",
  },
  {
    name: "Hacer Mandados",
  },
];
export default function Home() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  const taskList = tasks.map((task, index) => (
    <TaskCardMain task={task} key={index} />
  ));

  return (
    <div className="content content-home" id="content-home">
      {taskList}
    </div>
  );
}
