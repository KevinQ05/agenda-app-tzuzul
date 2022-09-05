import "./Home.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import TaskCardMain from "../../components/TaskCardMain/TaskCardMain";
const { tasks } = require("../../data/tasks.json");

export default function Home() {
  const { user } = useAuthContext();

  console.log(tasks);

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  const taskList = tasks.map((task, index) => (
    <TaskCardMain task={task} key={index} />
  ));

  return (
    <div className="content content-home" id="content-home">
      <h2>Upcoming Tasks:</h2>
      {taskList}
    </div>
  );
}
