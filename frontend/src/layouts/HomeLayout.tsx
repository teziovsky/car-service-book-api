import Footer from "components/Layouts/Footer/Footer";
import HeaderHome from "components/Layouts/Header/HeaderHome";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React from "react";
import { Outlet } from "react-router-dom";

const links: LinkType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/pricing",
    name: "Pricing",
    anchor: true,
  },
  {
    path: "/contact",
    name: "Contact",
    anchor: true,
  },
];

const HomeLayout = () => {
  return (
    <>
      <HeaderHome links={links} />
      <main className="layout layout--home">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
