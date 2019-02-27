import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props} className="oneHundredHeight">
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/">
        Matches
      </a>

      <a className="menu-item" href="/">
        Messages
      </a>
    </Menu>
  );
}; 