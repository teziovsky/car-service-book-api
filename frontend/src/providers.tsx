import { CookiesProvider } from "react-cookie";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const Providers = ({ children }: Props) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default Providers;
