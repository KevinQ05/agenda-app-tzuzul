import "./Home.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import TaskCardMain from "../../components/TaskCardMain/TaskCardMain";
import { useEffect, useState } from "react";
import defaultTasks from "../../data/tasks.json";

export default function Home() {
  const [tasks, setTasks] = useState(defaultTasks.tasks);

  function setTaskById(data) {
    const tasksCopy = tasks.slice();
    const taskIndex = tasksCopy.findIndex((task) => task.id === data.id);
    tasksCopy[taskIndex] = data;
    setTasks(tasksCopy);
  }
  useEffect(() => {
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }, [tasks]);

  const { user } = useAuthContext();

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  const taskList = tasks.map((task) => (
    <TaskCardMain
      task={task}
      key={task.id}
      setTask={(data) => setTaskById(data)}
    />
  ));
  return (
    <div className="content content-home" id="content-home">
      <h2>Upcoming Tasks:</h2>
      {taskList}
    </div>
  );
}
