import Breadcrumbs from "components/Layouts/Breadcrumbs/Breadcrumbs";
import Footer from "components/Layouts/Footer/Footer";
import Header from "components/Layouts/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header type="App" />
      <Breadcrumbs />
      <main className="layout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
