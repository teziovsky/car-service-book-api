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
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
