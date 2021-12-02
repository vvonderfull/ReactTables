import React from "react";
import { Link } from "react-router-dom";
import "./LayoutNavbar.scss";

const LayoutNavbar = () => {
  return (
    <header className="navbar">
      <ul>
        <li>
          <Link to="students">Студенты</Link>
        </li>
        <li>
          <Link to="ratings">Рэйтинг</Link>
        </li>
        <li>
          <Link to="subjects">Предметы</Link>
        </li>
      </ul>
    </header>
  );
};

export default LayoutNavbar;
