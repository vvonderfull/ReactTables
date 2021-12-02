import React from "react";
import "./Main.scss";
import LayoutNavbar from "../LayoutNavbar/LayoutNavbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="main-layout">
      <LayoutNavbar />
      <Outlet />
    </main>
  );
};

export default Main;
