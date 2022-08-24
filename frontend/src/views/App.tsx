import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "src/routes";

const App = () => {
  const routeComponents = routes.map(({ path, Layout, Component }, key) => (
    <Route
      path={path}
      element={
        <Layout>
          <Component />
        </Layout>
      }
      key={key}
    />
  ));

  return (
    <>
      <Routes>{routeComponents}</Routes>
    </>
  );
};

export default App;
