import AppLayout from "layouts/AppLayout";
import HomeLayout from "layouts/HomeLayout";
import React from "react";
import { useRoutes } from "react-router-dom";
import About from "views/About";
import AppIndex from "views/App/AppIndex";
import Index from "views/Index";

const Router = () => {
  return useRoutes([
    {
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
      ],
    },
    {
      element: <AppLayout />,
      children: [
        {
          path: "/app",
          element: <AppIndex />,
          children: [
            {
              path: "/app/about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);
};

export default Router;
