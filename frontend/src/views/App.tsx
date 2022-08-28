import GlobalStyle from "components/Styled/Global";
import useTheme from "hooks/useTheme";
import React from "react";
import Router from "routes";
import { ThemeProvider } from "styled-components";

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
