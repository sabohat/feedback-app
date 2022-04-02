import React from "react";
import Sidebar from "../Sidebar";
import { Logo } from "../svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="navbar flex ">
      <div className="wrapper relative">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex space-x-2">
            <Logo />
            <h1 className="w-[152px]">WIUT Student Feedback System</h1>
          </div>
          <Nav />
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}
