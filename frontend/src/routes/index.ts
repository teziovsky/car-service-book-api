import AppLayout from "layouts/AppLayout";
import HomeLayout from "layouts/HomeLayout";
import AppIndex from "views/App/AppIndex";
import Index from "views/Index";

const routes = [
  {
    path: "/",
    Component: Index,
    Layout: HomeLayout,
  },
  {
    path: "/app",
    Component: AppIndex,
    Layout: AppLayout,
  },
];

export default routes;
