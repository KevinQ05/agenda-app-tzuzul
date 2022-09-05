import { Calendar } from "../Calendar/Calendar";
import React from "react";
import "./DateForm.scss";
import { FiClock } from "react-icons/fi";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { useRef } from "react";

export default function DateForm({ date, setDate }) {
  const [currentDate, setCurrentDate] = useState(date);
  const [days, setDays] = useState([]);
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    const newDays = getCalendarDays(currentDate).map((day, index) => {
      // Due to MATHS, index - day is constant for days of the month, and not for days outside it
      // will never get bigger than 6
      const isDimmed = index - day < -1 || index - day > 6;
      const isSelected =
        !isDimmed &&
        currentDate.getMonth() === date.getMonth() &&
        date.getDate() === day &&
        currentDate.getFullYear() === date.getFullYear();

      return (
        <DayNumber
          isDimmed={isDimmed}
          key={index}
          value={day}
          isSelected={isSelected}
          date={currentDate}
          setDate={setDate}
        />
      );
    });
    setDays(newDays);
  }, [currentDate, date]);

  const incrementMonth = (amount) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(year, month + amount));
  };

  const handleCalendarOpen = (e) => {
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
              <div className="month-name">{getMonthString(currentDate)}</div>
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
function getFirstDay(currentDate) {
  const date = new Date(currentDate);
  date.setDate(1);
  const firstDay = date.getDay();
  return firstDay;
}

function daysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}

function getFirstWeek(currentDate) {
  const date = new Date(currentDate);
  const firstDay = getFirstDay(date);
  let firstWeek = new Array(7).fill(0);

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const prevMonth = new Date(currentYear, currentMonth - 1);

  firstWeek[firstDay] = 1;
  firstWeek = firstWeek.map((day, index) => {
    if (index < firstDay) {
      return daysInMonth(prevMonth) - (firstDay - index - 1);
    }
    if (index > firstDay) {
      return 1 + (index - firstDay);
    }
    return day;
  });

  return firstWeek;
}

function getCalendarDays(date) {
  const NUMBER_OF_WEEKS = 6;
  const firstWeek = getFirstWeek(date);

  let calendarDays = [...firstWeek];
  for (let i = 0; i < 7 * (NUMBER_OF_WEEKS - 1); i++) {
    calendarDays.push(firstWeek[6] + i + 1);
  }

  calendarDays = calendarDays.map((day, index) => {
    if (day > daysInMonth(date) && index > 6) {
      return day - daysInMonth(date);
    }
    return day;
  });
  return calendarDays;
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${weekday[date.getDay()]}, ${
    months[date.getMonth()]
  }. ${date.getDate()}`;
}

function getMonthString(date) {
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
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function DayNumber({ isDimmed, isSelected, index, value, date, setDate }) {
  const dimmed = isDimmed ? "dimmed-item" : "";
  const selected = isSelected ? "selected-item" : "";

  function handleClick() {
    if (isDimmed) return;
    setDate(new Date(date.getFullYear(), date.getMonth(), value));
  }

  return (
    <li
      className={`calendar-grid-item ${dimmed} ${selected}`}
      key={index}
      onClick={handleClick}
    >
      {value}
    </li>
  );
}
