import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FaTrashAlt } from "react-icons/fa";

import TaskDetails from "./TaskDetails";
import withTransition from "./withTransition";
const colors = [
  { name: "default", value: "#d4d2d6" },
  { name: "Green", value: "#32a852" },
  { name: "Yellow", value: "#e2e683" },
  { name: "Blue", value: "#83ace6" },
  { name: "Orange", value: "#f5b771" },
  { name: "Purple", value: "#b371f5" },
];

export default function TaskCardMain({ task, setTask, onClick, deleteTask }) {
  const [accentColor, setAccentColor] = useState(task.color || colors[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    task.date ? new Date(task.date) : new Date()
  );
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  const taskCard = useRef();

  function setBorderColor(color) {
    taskCard.current.style.setProperty("border-left-color", color);
  }

  function handleOpen() {
    const navbar = document.getElementById("mobile-nav");
    navbar.classList.toggle("navbar-slide");
    setIsOpen(!isOpen);
    onClick();
  }

  function handleSave(task) {
    setCurrentDate(task.date);
    handleOpen();
    setTask(task);
  }

  const [styles, api] = useSpring(() => ({ x: 0 }));
  const [trashStyle, trashApi] = useSpring(() => ({ opacity: 0 }));

  function handleDrag(e) {
    const shiftAmount = getShiftAmount(e, 120);
    api.start({ x: shiftAmount });
    trashApi.start({ opacity: 1 });
    if (shiftAmount === 120) {
      setIsBeingDeleted(true);
    } else if (shiftAmount < 120) {
      setIsBeingDeleted(false);
    }
  }

  function handleDragEnd() {
    trashApi.start({ opacity: 0 });
    if (isBeingDeleted) {
      console.log("deleted");
      deleteTask(task);
    }
  }

  useEffect(() => {
    setBorderColor(accentColor.value);
  }, [accentColor]);

  // For animation
  const TaskDetailsWithTransition = withTransition(TaskDetails, isOpen, {
    from: { marginLeft: "100%", opacity: 0.5 },
    enter: { marginLeft: "0%", opacity: 1 },
    leave: { marginLeft: "100%", opacity: 0.5 },
  });
  return (
    <div className="task-card-wrapper">
      <animated.span className="task-card-trash-icon" style={trashStyle}>
        <FaTrashAlt size={20} />
      </animated.span>
      <animated.div
        className="task-card task-card-container"
        id="task-card-container"
        ref={taskCard}
        onClick={handleOpen}
        draggable={true}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={styles}
      >
        <div className="task-card-header">
          <div className="task-card task-card-title">{task.name}</div>
        </div>
        <div className="task-card task-card-date">
          <span className="task-card task-card-hour">15:30 - 17:30</span>
          <span className="task-card task-card-date">
            {getDateString(currentDate)}
          </span>
        </div>
      </animated.div>
      <TaskDetailsWithTransition
        task={task}
        goBack={handleOpen}
        onSave={handleSave}
      />
    </div>
  );
}
function getDateString(date) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${weekday[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}`;
}

function getShiftAmount(e, cap = 130) {
  const eventOffset = e.nativeEvent.offsetX;
  if (eventOffset > 0 && eventOffset < cap) {
    return eventOffset;
  } else if (eventOffset > cap) {
    return cap;
  }
  return 0;
}
