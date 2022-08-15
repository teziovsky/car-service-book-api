import Button from "components/Button/Button";
import Heading from "components/Heading/Heading";
import React, { useState } from "react";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("light");

  return (
    <div>
      <Heading level={1}>{selectedTheme}</Heading>
      <Heading level={2}>Button</Heading>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button onClick={() => setSelectedTheme("light")} icon="HiPlus">
          Light
        </Button>
        <Button onClick={() => setSelectedTheme("dark")} secondary>
          Dark
        </Button>
      </div>
    </div>
  );
}

export default App;
