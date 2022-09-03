import React from "react";
import "./DateForm.scss";
import { FiClock } from "react-icons/fi";

export default function DateForm() {
  return (
    <div className="date-form">
      <FiClock size={20} />
      <span>Sábado 3 de Sept.</span>
      <span>15:30 - 17:30</span>
    </div>
  );
}
