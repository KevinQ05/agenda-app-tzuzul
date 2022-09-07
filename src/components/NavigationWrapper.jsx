import React from "react";
import DrawerDesktop from "./DrawerDesktop";
import Spacer from "./Spacer";
import Navbar from "./Navbar";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import Drawer from "./Drawer";
import { Outlet } from "react-router-dom";

export default function NavigationWrapper(props) {
  const [drawerActive, setDrawerActive] = useState(false);
  const transition = useTransition(drawerActive, {
    from: { x: "-100%" },
    enter: { x: "0" },
    leave: { x: "-100%" },
  });

  const hideDrawer = () => {
    setDrawerActive(false);
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.remove("wrapper-active");
  };
  const showDrawer = () => {
    setDrawerActive(true);
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.add("wrapper-active");
  };

  const AnimatedDrawer = animated(Drawer);
  return (
    <>
      {transition((style, item) =>
        item ? <AnimatedDrawer style={style} onClickOut={hideDrawer} /> : <></>
      )}
      <DrawerDesktop />
      <div className="wrapper" id="wrapper">
        <Navbar onMenuClick={showDrawer} />
        <Spacer />
        <Outlet />
      </div>
    </>
  );
}