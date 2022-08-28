import React from "react";
import { Outlet } from "react-router-dom";

const AppIndex = () => {
  return (
    <>
      <h2>App index</h2>
      <Outlet />
    </>
  );
};

export default AppIndex;
