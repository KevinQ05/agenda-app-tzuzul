import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import TaskCardMain from "../components/TaskCardMain";
import { useEffect, useState } from "react";
import defaultTasks from "../data/tasks.json";
import CreateButton from "../components/CreateButton";
import { v4 as uuidv4 } from "uuid";
import TaskDetails from "../components/TaskDetails";
import WithTransition from "../components/withTransition";

export default function Home() {
  const [tasks, setTasks] = useState(defaultTasks.tasks);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);

  function setTaskById(data) {
    const tasksCopy = tasks.slice();
    const taskIndex = tasksCopy.findIndex((task) => task.id === data.id);
    tasksCopy[taskIndex] = data;
    setTasks(tasksCopy);
  }

  function newTask() {
    const defaultValues = {
      name: "Add a title",
      date: new Date().toISOString(),
      id: uuidv4(),
    };
    return defaultValues;
  }

  function deleteTask(data) {
    const tasksCopy = tasks.slice();
    const taskIndex = tasksCopy.findIndex((task) => task.id === data.id);
    tasksCopy.splice(taskIndex, 1);
    setTasks(tasksCopy);
  }

  function handleOpen() {
    setIsNew(!isNew);
    const navbar = document.getElementById("mobile-nav");
    navbar.classList.toggle("navbar-slide");
    setIsMenuOpen(!isMenuOpen);
  }

  function handleSave(task) {
    handleOpen();
    const tasksCopy = tasks.slice();
    setTasks([task, ...tasksCopy]);
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
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      deleteTask={deleteTask}
    />
  ));

  const AnimatedTaskDetails = WithTransition(TaskDetails, isNew, {
    from: { marginLeft: "100%", opacity: 0 },
    enter: { marginLeft: "0%", opacity: 1 },
    leave: { marginLeft: "100%", opacity: 0 },
  });
  const AnimatedCreateButton = WithTransition(CreateButton, !isMenuOpen, {
    from: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, delay: 350 },
    leave: { opacity: 0, y: 100 },
  });

  return (
    <div className="content content-home" id="content-home">
      <h2>Upcoming Tasks:</h2>
      {taskList}
      <AnimatedCreateButton createTask={handleOpen} />
      <AnimatedTaskDetails
        task={newTask()}
        goBack={handleOpen}
        onSave={handleSave}
      />
    </div>
  );
}
