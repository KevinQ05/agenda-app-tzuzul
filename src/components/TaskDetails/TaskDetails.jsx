import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImParagraphLeft } from "react-icons/im";
import Button from "../Button/Button";
import { FiArrowLeft, FiClock, FiUsers } from "react-icons/fi";

export default function TaskDetails({ task, goBack, style }) {
  return (
    <div className="task-full" style={style}>
      <div className="task-full-header">
        <Button className="btn-ghost task-arrow-container">
          <FiArrowLeft size={20} className="task-full-arrow" onClick={goBack} />
        </Button>
        <BsThreeDotsVertical size={20} />
      </div>
      <div className="task-full-title">{task.name}</div>
      <div className="task-full-date">
        <FiClock size={20} />
        <span>Sábado 3 de Sept.</span>
        <span>15:30 - 17:30</span>
      </div>
      <div className="task-full-users">
        <FiUsers className="users-item" size={20} />
        <span className="users-item">Just me</span>
      </div>
      <div className="task-full-location">
        <HiOutlineLocationMarker className="location-item" size={20} />
        <span>Add location</span>
      </div>
      <div className="task-full-description">
        <ImParagraphLeft className="description-item" size={20} />
        <span className="description-item description-prompt">
          Add description
        </span>
      </div>
      <div className="task-full-footer">
        <Button className="footer-save">Save</Button>
      </div>
    </div>
  );
}
