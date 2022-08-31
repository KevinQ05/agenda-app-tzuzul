import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Spacer from "./components/Spacer/Spacer";
import Drawer from "./components/Drawer/Drawer";
import DrawerDesktop from "./components/DrawerDesktop/DrawerDesktop";
import { animated, useTransition } from "react-spring";

function App() {
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
    <Router>
      {transition((style, item) =>
        item ? <AnimatedDrawer style={style} onClickOut={hideDrawer} /> : <></>
      )}
      <DrawerDesktop />
      <div className="wrapper" id="wrapper">
        <Navbar onMenuClick={showDrawer} />
        <Spacer />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
