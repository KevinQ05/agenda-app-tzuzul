import React from "react";

import "./Calendar.scss";

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

export function Calendar({ days }) {
  return (
    <div className="calendar">
      <div className="calendar-header">{daysOfWeek}</div>
      <div className="calendar-grid">{days}</div>
    </div>
  );
}
