import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import "./main.css";
import Footer from "../components/Footer/Footer";
const Main = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
