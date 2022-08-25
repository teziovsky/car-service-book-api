import GlobalStyle from "components/Styled/Global";
import useTheme from "hooks/useTheme";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "src/routes";
import { ThemeProvider } from "styled-components";

const App = () => {
  const { theme } = useTheme();
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>{routeComponents}</Routes>
    </ThemeProvider>
  );
};

export default App;
