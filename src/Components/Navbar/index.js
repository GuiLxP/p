/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.css";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#home"></a>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="jeBien"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="jeBien" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <a href="#Projects" className="navbar-item">
            Projects
          </a>
          <a href="#AboutMe" className="navbar-item">
            About Me
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a href="#s" className="navbar-item">
                Donate me a coffee
              </a>
              <a
                href="https://www.instagram.com/guilherme.matheus/"
                target="_blank"
                rel="noreferrer"
                className="navbar-item"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-dark"
                href="https://github.com/guilxp"
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub />
                &nbsp;<strong>Github</strong>
              </a>
              <a
                className="button is-link"
                href="https://www.linkedin.com/in/guilherme-pantoja-7694a6208/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin />
                &nbsp;<strong>LinkedIn</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
