import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import "./main.css";
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
