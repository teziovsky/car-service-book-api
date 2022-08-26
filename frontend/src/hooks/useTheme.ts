import { breakpoints, dark, light, typography, variables } from "components/Styled/Variables";
import { useState } from "react";

interface Map {
  [key: string]: any;
}

const themesMap: Map = {
  light,
  dark,
};

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const theme = { ...breakpoints, ...themesMap[currentTheme], ...typography, ...variables };

  return {
    theme,
    setCurrentTheme,
  };
};

export default useTheme;
