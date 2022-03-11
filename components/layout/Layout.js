import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const noHeaderRoutes = [];
  const router = useRouter();
  return (
    <div className="main_container" id="iman_container">
      <div className="layout">
        {!noHeaderRoutes.includes(router.pathname) ? <Header /> : ""}
        {children}
        <Footer />
      </div>
    </div>
  );
}
