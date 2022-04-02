import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div>
      <nav className="hidden md:flex">
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
  );
}