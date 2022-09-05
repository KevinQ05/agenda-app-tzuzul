import { DatePicker } from "../DatePicker/DatePicker";
import "./DateForm.scss";
import React from "react";
import { useState } from "react";
import { FiClock } from "react-icons/fi";
import { getDateString } from "../../utils/helpers/calendar";
import { Transition, animated } from "react-spring";

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
  const AnimatedDatePicker = animated(DatePicker);

  return (
    <div className="date-form-mobile">
      <FiClock size={20} />
      <span className="displayed-date" onClick={handleCalendarOpen}>
        {getDateString(date || new Date())}
        <Transition
          items={calendarOpen}
          from={{ y: -100, opacity: 0 }}
          enter={{ y: 0, opacity: 1 }}
          leave={{
            y: -100,
            opacity: 0,
            config: {
              duration: 150,
            },
          }}
        >
          {(styles, item) =>
            item && (
              <AnimatedDatePicker
                style={styles}
                date={date}
                onClickOut={closeCalendar}
                setDate={setDate}
              />
            )
          }
        </Transition>
      </span>
      <span className="displayed-time">15:30 - 17:30</span>
    </div>
  );
}
