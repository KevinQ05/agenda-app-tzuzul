import React from "react";

export default function Button({ className, icon, label, children }) {
  return (
    <div className={`btn ${className}`}>
      <div className="btn-item btn-item-icon">{icon ? icon : ""}</div>
      <div className="btn-item btn-item-label">{label}</div>
      {children}
    </div>
  );
}
