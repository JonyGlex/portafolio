import "./topbar.scss";

import { Mail, Person2 } from "@mui/icons-material";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person2 className="icon" />
            <span>+52 618 292 89 88</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jonhyoh4@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
