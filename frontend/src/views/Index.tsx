import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <p>Hello World!</p>
      <Outlet />
    </div>
  );
};

export default Index;
