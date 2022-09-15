import Footer from "components/Layouts/Footer/Footer";
import Header from "components/Layouts/Header/Header";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React from "react";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "src/components/Styled/Global";

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
      <StyledLayout>
        <Outlet />
      </StyledLayout>
      <Footer />
    </>
  );
};

export default HomeLayout;
