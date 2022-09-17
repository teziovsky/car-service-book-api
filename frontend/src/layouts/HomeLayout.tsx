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
      <Header type="Home" links={links} />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
