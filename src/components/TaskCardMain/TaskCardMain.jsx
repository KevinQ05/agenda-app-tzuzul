import "./TaskCardMain.scss";
import React, { useRef } from "react";
import { useState } from "react";
import { FiArrowLeft, FiClock, FiUsers } from "react-icons/fi";
import { Transition, animated } from "react-spring";
import { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImParagraphLeft } from "react-icons/im";
import Button from "../Button/Button";
import TaskDetails from "../TaskDetails/TaskDetails";

const colors = [
  { name: "default", value: "#d4d2d6" },
  { name: "Green", value: "#32a852" },
  { name: "Yellow", value: "#e2e683" },
  { name: "Blue", value: "#83ace6" },
  { name: "Orange", value: "#f5b771" },
  { name: "Purple", value: "#b371f5" },
];

export default function TaskCardMain({ task }) {
  const [accentColor, setAccentColor] = useState(colors[0]);
  const [isOpen, setIsOpen] = useState(false);

  const taskCard = useRef();

  function setBorderColor(color) {
    taskCard.current.style.setProperty("border-left-color", color);
  }

  function handleOpen() {
    const navbar = document.getElementById("mobile-nav");
    navbar.classList.toggle("navbar-slide");
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setBorderColor(accentColor.value);
  }, [accentColor]);

  // For animation
  const AnimatedTaskDetails = animated(TaskDetails);
  return (
    <>
      <div
        className="task-card task-card-container"
        id="task-card-container"
        ref={taskCard}
        onClick={handleOpen}
      >
        <div className="task-card-header">
          <div className="task-card task-card-title">{task.name}</div>
        </div>
        <div className="task-card task-card-date">
          <span className="task-card task-card-hour">15:30 - 17:30</span>
          <span className="task-card task-card-date">16 Sept</span>
        </div>
      </div>
      <Transition
        items={isOpen}
        from={{ marginLeft: "100%" }}
        enter={{ marginLeft: "0%" }}
        leave={{ marginLeft: "100%" }}
      >
        {(styles, item) =>
          item && (
            <AnimatedTaskDetails
              task={task}
              style={styles}
              goBack={handleOpen}
              onSave={handleOpen} //Temporary
            />
          )
        }
      </Transition>
    </>
  );
}
