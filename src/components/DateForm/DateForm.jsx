import { DatePicker } from "../DatePicker/DatePicker";
import "./DateForm.scss";
import React from "react";
import { useState } from "react";
import { FiClock } from "react-icons/fi";
import { getDateString } from "../../utils/helpers/calendar";

export default function DateForm({ date, setDate }) {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleCalendarOpen = (e) => {
    // To be able to click the calendar and not have it close
    if (e.target !== e.currentTarget) return;
    setCalendarOpen(!calendarOpen);
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  return (
    <div className="date-form-mobile">
      <FiClock size={20} />
      <span className="displayed-date" onClick={handleCalendarOpen}>
        {getDateString(date || new Date())}
        {calendarOpen ? (
          <DatePicker
            date={date}
            onClickOut={closeCalendar}
            setDate={setDate}
          />
        ) : null}
      </span>
      <span className="displayed-time">15:30 - 17:30</span>
    </div>
  );
}
