import React from "react";

import "./Calendar.scss";
import DayNumber from "../DayNumber/DayNumber";
import { getMonthFromIndex } from "../../utils/helpers/calendar";

const daysOfWeek = [
  <span className="calendar-header-item" key={"sunday"}>
    S
  </span>,
  <span className="calendar-header-item" key={"monday"}>
    M
  </span>,
  <span className="calendar-header-item" key={"tuesday"}>
    T
  </span>,
  <span className="calendar-header-item" key={"wednesday"}>
    W
  </span>,
  <span className="calendar-header-item" key={"thursday"}>
    T
  </span>,
  <span className="calendar-header-item" key={"friday"}>
    F
  </span>,
  <span className="calendar-header-item" key={"saturday"}>
    S
  </span>,
];

export function Calendar({
  days,
  displayedMonth,
  date,
  setDate,
  incrementMonth,
}) {
  const calendarGrid = days.map((day, index) => {
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
  return (
    <div className="calendar">
      <div className="calendar-header">{daysOfWeek}</div>
      <div className="calendar-grid">{calendarGrid}</div>
    </div>
  );
}
