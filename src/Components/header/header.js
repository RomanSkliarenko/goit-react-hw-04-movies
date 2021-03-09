import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="headerUl">
        <li>
          <NavLink
            exact
            to="/"
            style={{ color: "#000000", textDecoration: "none" }}
            activeStyle={{ color: "#FF4500", fontSize: 25 }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={{ color: "#000000", textDecoration: "none" }}
            activeStyle={{ color: "#FF4500", fontSize: 25 }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
