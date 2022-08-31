import "./Drawer.scss";
import { useRef } from "react";
import { useOutsideAlerter } from "../../utils/utils";
import DropDown from "../DropDown/DropDown";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";
import { AiOutlineHome } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

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
      <LinkButton
        to="/"
        className="btn-full"
        icon={<AiOutlineHome />}
        label="Home"
      />
      <DropDown label="My Tasks">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </DropDown>
      <DropDown label="Groups">
        <div>Grupo 1</div>
        <div>Grupo 2</div>
        <div>Grupo 2</div>
        <div>Grupo Final</div>
      </DropDown>
      <div className="drawer-footer">
        <LinkButton
          to="/login"
          className="btn-full footer-item"
          icon={<TbLogout />}
          label="Log out"
        />
        <Logo className="logo-desktop" />
      </div>
    </div>
  );
}
