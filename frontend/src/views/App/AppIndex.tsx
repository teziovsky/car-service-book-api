import React from "react";
import { Outlet } from "react-router-dom";

const AppIndex = () => {
  return (
    <main className="layout">
      <h2>App index</h2>
      <Outlet />
    </main>
  );
};

export default AppIndex;
