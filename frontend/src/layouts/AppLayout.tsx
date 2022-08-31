import Breadcrumbs from "components/Layouts/Breadcrumbs/Breadcrumbs";
import Footer from "components/Layouts/Footer/Footer";
import Header from "components/Layouts/Header/Header";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React from "react";
import { Outlet } from "react-router-dom";

const links: LinkType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/app/cars",
    name: "Cars",
  },
  {
    path: "/app/repairs",
    name: "Repairs",
  },
];

const AppLayout = () => {
  return (
    <>
      <Header type="App" links={links} />
      <Breadcrumbs />
      <main className="layout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
