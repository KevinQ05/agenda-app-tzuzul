import "./Home.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import TaskCardMain from "../../components/TaskCardMain/TaskCardMain";
import { useEffect, useState } from "react";
import defaultTasks from "../../data/tasks.json";
import CreateButton from "../../components/CreateButton/CreateButton";
import { v4 as uuidv4 } from "uuid";
import { Transition, animated } from "react-spring";
import TaskDetails from "../../components/TaskDetails/TaskDetails";

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
    />
  ));

  const AnimatedTaskDetails = animated(TaskDetails);
  return (
    <div className="content content-home" id="content-home">
      <h2>Upcoming Tasks:</h2>
      {taskList}
      {!isMenuOpen ? (
        <>
          <CreateButton createTask={handleOpen} />
        </>
      ) : null}
      {isNew ? (
        <Transition
          items={isNew}
          from={{ marginLeft: "100%" }}
          enter={{ marginLeft: "0%" }}
          leave={{ marginLeft: "100%" }}
        >
          {(styles, item) =>
            item && (
              <AnimatedTaskDetails
                task={newTask()}
                style={styles}
                goBack={handleOpen}
                onSave={handleSave} //Temporary
              />
            )
          }
        </Transition>
      ) : (
        <></>
      )}
    </div>
  );
}
