import Footer from "components/Layouts/Footer/Footer";
import Header from "components/Layouts/Header/Header";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const links: LinkType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/app",
    name: "App",
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

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header type="Home" links={links} />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
