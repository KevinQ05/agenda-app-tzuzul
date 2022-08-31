import "./DropDown.scss";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function DropDown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-label-container"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown-label-text">{props.label}</span>
        <FiChevronDown className="dropdown-label-chevron" />
      </div>
      <div className="dropdown-children">{isOpen ? props.children : <></>}</div>
    </div>
  );
}
