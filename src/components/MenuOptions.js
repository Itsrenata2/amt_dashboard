import React from "react";
// import { Link } from "react-router-dom";

export function MenuOptions({ icon, option, to }) {
  return (
    <div className="menu-option">
      {/* <Link to={to}> */}
      <i className={icon}></i>
      <p>{option}</p>
      {/* </Link> */}
    </div>
  );
}
