import React from "react";
import Header from "./Header/header";
import { Outlet } from "react-router-dom";
import Home from "./Home/home";
import Footer from "./Footer/footer";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
