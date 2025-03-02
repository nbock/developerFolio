import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, educationInfo, workExperiences} from "../../portfolio";

function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          {educationInfo.viewEducation &&
            <li>
              <a href="#education">Education</a>
            </li>
          }
          {workExperiences.viewExperiences &&
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          }
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
