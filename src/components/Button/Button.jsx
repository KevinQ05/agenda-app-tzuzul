import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../LinkButton/Button.scss";

export default function Button({ className, icon, children, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleEvent = (event) => {
    event.stopPropagation();
    if (event.type === "mousedown" || event.type === "touchstart") {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  const resize = useSpring({
    scale: clicked ? 0.8 : 1,
    config: {
      duration: 50,
    },
  });

  return (
    <animated.div
      className={`btn ${className}`}
      onMouseDown={(e) => handleEvent(e)}
      onTouchStart={(e) => handleEvent(e)}
      onMouseUp={(e) => handleEvent(e)}
      onTouchEnd={(e) => handleEvent(e)}
      style={resize}
      onClick={onClick}
    >
      <div className="btn-item btn-item-icon">{icon ? icon : ""}</div>
      <div className="btn-item btn-item-label">{children}</div>
    </animated.div>
  );
}
