import React from "react";
import "./CreateButton.scss";
import { FaFeatherAlt } from "react-icons/fa";

export default function CreateButton({ createTask }) {
  return (
    <div className="create-button" id="create-button" onClick={createTask}>
      <span className="create-button-icon">
        <FaFeatherAlt size={20} />
      </span>
      <span className="create-button-text">New</span>
    </div>
  );
}
