import React from "react";
import { Link } from "react-router-dom";
export default function Logo(props) {
  return (
    <Link className={"logo-main " + props.className} to={"/"}>
      Tzuzul <span className="logo-calendar">Calendar</span>
    </Link>
  );
}
