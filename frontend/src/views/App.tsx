import React from "react";
import { useRoutes } from "react-router-dom";

import routes from "../routes";

const App = () => {
  const allRoutes = useRoutes(routes);

  return (
    <>
      <h1>Test</h1>
      {allRoutes}
    </>
  );
};

export default App;
