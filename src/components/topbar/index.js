import React from "react";
import Themetoggle from "../themetoggle";
import { logotext, brandTag } from "../../content_option";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar__in">
        <div className="brand">
          <span className="brand__mark">{logotext}</span>
          <span className="brand__tag">{brandTag}</span>
        </div>
        <nav className="nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
          <a href="#contact" className="nav__cta">Contact</a>
          <Themetoggle />
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
