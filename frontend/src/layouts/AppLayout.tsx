import Breadcrumbs from "components/Layouts/Breadcrumbs/Breadcrumbs";
import Footer from "components/Layouts/Footer/Footer";
import HeaderApp from "components/Layouts/Header/HeaderApp";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <HeaderApp />
      <main className="layout layout--app">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
