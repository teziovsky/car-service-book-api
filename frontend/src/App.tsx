import Button from "components/styles/Button/Button.styled";
import GlobalStyles from "components/styles/Global";
import { dark, light } from "components/styles/Theme.styled";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <h1 style={{ marginBottom: "10px" }}>{selectedTheme.name}</h1>
        <Button style={{ marginRight: "10px" }} onClick={() => setSelectedTheme(light)}>
          Light
        </Button>
        <Button onClick={() => setSelectedTheme(dark)}>Dark</Button>
      </>
    </ThemeProvider>
  );
}

export default App;
