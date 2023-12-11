import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import "./main.css";
const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
