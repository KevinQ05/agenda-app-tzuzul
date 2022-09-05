import "./DateForm.scss";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { FiClock } from "react-icons/fi";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Calendar } from "../Calendar/Calendar";
import Button from "../Button/Button";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import {
  getCalendarDays,
  getDateString,
  getMonthString,
  getMonthFromIndex,
} from "../../utils/helpers/calendar";
import DayNumber from "../DayNumber/DayNumber";

export default function DateForm({ date, setDate }) {
  const [displayedMonth, setDisplayedMonth] = useState(date);
  const [days, setDays] = useState([]);
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    // Due to MATHS, index - day is constant for days of the month, and not for days outside it
    // will never get bigger than 5
    const newDays = getCalendarDays(displayedMonth).map((day, index) => {
      const isDimmed = index - day < -1 || index - day > 5;
      const isSelected =
        !isDimmed &&
        displayedMonth.getMonth() === date.getMonth() &&
        date.getDate() === day &&
        displayedMonth.getFullYear() === date.getFullYear();

      const dayConfig = {
        value: day,
        index,
        isDimmed,
        isSelected,
        date: new Date(
          displayedMonth.getFullYear(),
          getMonthFromIndex(displayedMonth.getMonth(), index - day).value,
          day
        ),
        current: displayedMonth,
      };
      return (
        <DayNumber
          day={dayConfig}
          setDate={setDate}
          switchMonth={(amount) => incrementMonth(amount)}
        />
      );
    });
    setDays(newDays);
  }, [displayedMonth, date]);

  const incrementMonth = (amount) => {
    const year = displayedMonth.getFullYear();
    const month = displayedMonth.getMonth();
    setDisplayedMonth(new Date(year, month + amount));
  };

  const handleCalendarOpen = (e) => {
    // To be able to click the calendar and not have it close
    if (e.target !== e.currentTarget) return;
    setCalendarOpen(!calendarOpen);
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  const datePicker = useRef();
  useOutsideAlerter(datePicker, closeCalendar);

  return (
    <div className="date-form-mobile">
      <FiClock size={20} />
      <span className="displayed-date" onClick={handleCalendarOpen}>
        {getDateString(date || new Date())}
        {calendarOpen ? (
          <div className="date-picker" ref={datePicker}>
            <div className="date-picker-header">
              <div className="month-name">{getMonthString(displayedMonth)}</div>
              <div className="date-picker-arrows">
                <span className="date-arrow" onClick={() => incrementMonth(-1)}>
                  <Button className="btn-ghost">
                    <BiChevronLeft size={25} />
                  </Button>
                </span>
                <span className="date-arrow" onClick={() => incrementMonth(1)}>
                  <Button className="btn-ghost">
                    <BiChevronRight size={25} />
                  </Button>
                </span>
              </div>
            </div>
            <Calendar days={days} />
          </div>
        ) : null}
      </span>
      <span className="displayed-time">15:30 - 17:30</span>
    </div>
  );
}
