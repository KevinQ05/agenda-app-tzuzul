import "./Drawer.scss";
import { useRef } from "react";
import { useOutsideAlerter } from "../../utils/utils";
import DropDown from "../DropDown/DropDown";
import Logo from "../Logo/Logo";

export default function Drawer(props) {
  const drawerRef = useRef(null);
  useOutsideAlerter(drawerRef, props.onClickOut);

  return (
    <div
      className={"drawer " + props.className}
      id="drawer"
      style={props.style}
      ref={drawerRef}
    >
      <Logo className="logo-desktop" />
      <DropDown label="My tasks">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </DropDown>
      <DropDown label="Groups">
        <div>Grupo 1</div>
        <div>Grupo 2</div>
      </DropDown>
    </div>
  );
}
