import Link from "next/link";
import React from "react";
import { Logo } from "../svg";

export default function Header() {
  return (
    <div className="navbar flex">
      <div className="wrapper">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex space-x-2">
            <Logo />
            <h1 className="w-[152px]">WIUT Student Feedback System</h1>
          </div>
          <nav>
            <ul className="nav">
              <li>
                <Link href="/features">
                  <a className="nav-link">Features</a>
                </Link>
              </li>
              <li>
                <Link href="/teachers">
                  <a className="nav-link">Teachers</a>
                </Link>
              </li>
              <li>
                <Link href="/modules">
                  <a className="nav-link">Modules</a>
                </Link>
              </li>
              <li>
                <Link href="/create">
                  <a className="nav-btn">+ Create Feedback</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
