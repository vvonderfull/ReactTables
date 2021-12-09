import React from "react";
import { Link } from "react-router-dom";
import "./LayoutNavbar.scss";

const LayoutNavbar = () => {
  return (
    <header className="navbar">
      <ul>
        <li>
          <Link to="students">
            <b>Студенты</b>
          </Link>
        </li>
        <li>
          <Link to="ratings">
            <b>Рэйтинг</b>
          </Link>
        </li>
        <li>
          <Link to="subjects">
            <b>Предметы</b>
          </Link>
        </li>
        <li>
          <Link to="/login">Выйти</Link>
        </li>
      </ul>
    </header>
  );
};

export default LayoutNavbar;
