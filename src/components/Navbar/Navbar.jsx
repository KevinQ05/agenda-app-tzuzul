import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo/Logo";

export default function Navbar(props) {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-item left">
        <GiHamburgerMenu
          className="button mobile-menu-icon"
          onClick={props.onMenuClick}
        />
      </div>
      <div className="mobile-nav-item center">
        <Logo />
      </div>
      <div className="mobile-nav-item right">Placeholder</div>
    </nav>
  );
}
