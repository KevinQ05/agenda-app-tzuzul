import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImParagraphLeft } from "react-icons/im";
import Button from "./Button";
import { FiArrowLeft, FiUsers } from "react-icons/fi";
import DateForm from "./DateForm";
import { useState, useEffect, useReducer } from "react";
import taskReducer from "../reducers/taskReducer";

export default function TaskDetails({ task, goBack, style, onSave }) {
  const [state, dispatch] = useReducer(taskReducer, task);

  return (
    <div className="task-full" style={style}>
      <div className="task-full-header">
        <Button className="btn-ghost task-arrow-container">
          <FiArrowLeft size={20} className="task-full-arrow" onClick={goBack} />
        </Button>
        <BsThreeDotsVertical size={20} />
      </div>
      <textarea
        className="task-full-title"
        value={state.name}
        maxLength={50}
        onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
      ></textarea>
      <DateForm
        date={new Date(state.date)}
        setDate={(newDate) => dispatch({ type: "DATE", payload: newDate })}
      />
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
        <Button
          className="footer-save"
          onClick={() => onSave(state)}
          id="footer-save"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
