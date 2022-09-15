import Breadcrumbs from "components/Layouts/Breadcrumbs/Breadcrumbs";
import Footer from "components/Layouts/Footer/Footer";
import Header from "components/Layouts/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "src/components/Styled/Global";

const AppLayout = () => {
  return (
    <>
      <Header type="App" />
      <Breadcrumbs />
      <StyledLayout>
        <Outlet />
      </StyledLayout>
      <Footer />
    </>
  );
};

export default AppLayout;
