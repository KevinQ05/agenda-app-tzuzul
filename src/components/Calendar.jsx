import React from "react";

import DayNumber from "./DayNumber";
import { getMonthFromIndex } from "../utils/helpers/calendar";
import { useEffect, useState } from "react";

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
  const [gridItems, setGridItems] = useState([]);

  // Due to MATHS, index - day is constant for days of the month, and not for days outside it
  // will never get bigger than 5
  useEffect(() => {
    const calendarGrid = days.map((day, index) => {
      const isDimmed =
        getMonthFromIndex(displayedMonth, index - day).increment !== 0;
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
        <div key={index}>
          <DayNumber
            day={dayConfig}
            setDate={setDate}
            switchMonth={(amount) => {
              incrementMonth(amount);
            }}
          />
        </div>
      );
    });
    setGridItems(calendarGrid);
  }, [days]);

  return (
    <div className="calendar">
      <div className="calendar-header">{daysOfWeek}</div>
      <div className="calendar-grid">{gridItems}</div>
    </div>
  );
}
