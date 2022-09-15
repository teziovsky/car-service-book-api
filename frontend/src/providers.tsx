import useTheme from "hooks/useTheme";
import { CookiesProvider } from "react-cookie";
import { DefaultProps } from "src/main";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/Styled/Global";

type Props = DefaultProps & {};

const Providers = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </CookiesProvider>
  );
};

export default Providers;
