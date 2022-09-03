import "./Drawer.scss";
import { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import DropDown from "../DropDown/DropDown";
import Logo from "../Logo/Logo";
import LinkButton from "../LinkButton/LinkButton";
import { AiOutlineHome } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import useAuthContext from "../../hooks/useAuthContext";
import UserCard from "../UserCard/UserCard";
import Button from "../Button/Button";

export default function Drawer(props) {
  const { logout } = useAuthContext();

  const drawerRef = useRef(null);
  useOutsideAlerter(drawerRef, props.onClickOut);

  return (
    <div
      className={"drawer " + props.className}
      id="drawer"
      style={props.style}
      ref={drawerRef}
    >
      <UserCard />
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
          onClick={logout}
        />
        <Logo className="logo-desktop" />
      </div>
    </div>
  );
}
