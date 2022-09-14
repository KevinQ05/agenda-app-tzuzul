import React from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Button from "./Button";
import { useRef, useState, useEffect } from "react";
import { Calendar } from "./Calendar";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import { getCalendarDays, getMonthString } from "../utils/helpers/calendar";

export function DatePicker({ date, onClickOut, setDate, style }) {
  const [displayedMonth, setDisplayedMonth] = useState(date);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const newDays = getCalendarDays(displayedMonth);
    setDays(newDays);
  }, [displayedMonth, date]);

  const incrementMonth = (amount) => {
    const year = displayedMonth.getFullYear();
    const month = displayedMonth.getMonth();
    setDisplayedMonth(new Date(year, month + amount));
  };

  const datePicker = useRef();
  useOutsideAlerter(datePicker, onClickOut);

  return (
    <div className="date-picker" ref={datePicker} style={style}>
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
      <Calendar
        days={days}
        displayedMonth={displayedMonth}
        date={date}
        incrementMonth={incrementMonth}
        setDate={setDate}
      />
    </div>
  );
}
