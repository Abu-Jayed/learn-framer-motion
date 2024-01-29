import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { twMerge } from "tailwind-merge";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <button className="btn">Hello</button>
      <button className={twMerge("btn-primary")}>Hello</button>
    </>
  );
};

export default MainLayout;
