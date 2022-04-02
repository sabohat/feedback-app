import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <nav className="hidden md:flex">
        <ul className="nav">
          <li>
            <Link href="/">
              <a className="nav-link">Home</a>
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
            <Link href="/about">
              <a className="nav-btn">About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
