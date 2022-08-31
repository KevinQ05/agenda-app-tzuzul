import "./DropDown.scss";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function DropDown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const styles = useSpring({
    // Calculate final height by number of children, all set to around 33px height in css
    height: isOpen ? `${40 + props.children.length * 33}px` : "35px",
  });

  const flip = useSpring({
    rotate: isOpen ? "180deg" : "0",
  });

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  const AnimatedChevron = animated(FiChevronDown);

  return (
    <animated.div className="dropdown" style={styles}>
      <div className="dropdown-label-container" onClick={handleOpen}>
        <span className="dropdown-label-text">{props.label}</span>
        <AnimatedChevron style={flip} className="dropdown-label-chevron" />
      </div>
      <div style={styles} className="dropdown-children">
        {isOpen ? props.children : <></>}
      </div>
    </animated.div>
  );
}
