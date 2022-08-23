import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Index from "views/Index";

const About = lazy(() => import("views/About"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
    children: [{ index: true, element: <About /> }],
  },
];

export default routes;
