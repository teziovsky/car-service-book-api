import Breadcrumbs from "components/Layouts/Breadcrumbs/Breadcrumbs";
import Footer from "components/Layouts/Footer/Footer";
import Header from "components/Layouts/Header/Header";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

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

const AppLayout: FC<Props> = () => {
  return (
    <>
      <Header type="App" links={links} />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
