import useTheme from "hooks/useTheme";
import { CookiesProvider } from "react-cookie";
import { DefaultProps } from "src/main";
import { ThemeProvider } from "styled-components";

type Props = DefaultProps & {};

const Providers = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CookiesProvider>
  );
};

export default Providers;
