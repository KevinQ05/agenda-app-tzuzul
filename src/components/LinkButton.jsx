import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({ className, icon, label, to, style }) {
  return (
    <Link className={`btn-link ${className}`} to={to} style={style}>
      <div className="btn-item btn-item-icon">{icon}</div>
      <div className="btn-item btn-item-label">{label}</div>
    </Link>
  );
}
