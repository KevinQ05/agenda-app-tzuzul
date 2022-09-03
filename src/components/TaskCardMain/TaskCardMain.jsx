import "./TaskCardMain.scss";
import React, { useRef } from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useSpring, animated } from "react-spring";
import { useEffect } from "react";
import useResize from "../../hooks/useResize";

const colors = [
  { name: "default", value: "#d4d2d6" },
  { name: "Green", value: "#32a852" },
  { name: "Yellow", value: "#e2e683" },
  { name: "Blue", value: "#83ace6" },
  { name: "Orange", value: "#f5b771" },
  { name: "Purple", value: "#b371f5" },
];

export default function TaskCardMain() {
  const [accentColor, setAccentColor] = useState(colors[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const hiddenContent = useRef();

  useEffect(() => {
    setBorderColor(accentColor.value);
  }, [accentColor]);

  useEffect(() => {
    setHeight(hiddenContent.current?.clientHeight || 0);
    console.log(height);
  });

  // For animation
  const flip = useSpring({
    rotate: isOpen ? "180deg" : "0",
  });
  const AnimatedChevron = animated(FiChevronDown);
  const growDown = useSpring({
    height: isOpen ? `${height + 100}px` : `100px`,
  });

  return (
    <animated.div
      className="task-card task-card-container"
      id="task-card-container"
      style={growDown}
    >
      <div
        className="task-card-header"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="task-card task-card-title">
          Parcial presencial de EDP{" "}
        </div>
        <AnimatedChevron
          className={"task-card-chevron"}
          style={flip}
          size={30}
        />
      </div>
      <div className="task-card task-card-date">
        <span className="task-card task-card-hour">15:30 - 17:30</span>
        <span className="task-card task-card-date">16 Sept</span>
      </div>
      {isOpen ? (
        <div className="task-card-open-content" ref={hiddenContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim,
          beatae quasi vitae molestias aliquam dolore reiciendis explicabo
          laudantium molestiae quia iusto delectus id voluptas optio. Dolor odit
          distinctio expedita? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Soluta enim, beatae quasi vitae molestias aliquam
          dolore reiciendis explicabo laudantium molestiae quia iusto delectus
          id voluptas optio. Dolor odit distinctio expedita? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Soluta enim, beatae quasi vitae
          molestias aliquam dolore reiciendis explicabo laudantium molestiae
          quia iusto delectus id voluptas optio. Dolor odit distinctio expedita?
        </div>
      ) : (
        <></>
      )}
    </animated.div>
  );
}

function setBorderColor(color) {
  const container = document.getElementById("task-card-container");
  container.style.setProperty("border-color", color);
}
