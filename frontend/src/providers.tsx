import { AuthProvider } from "context/authContext";
import { CookiesProvider } from "react-cookie";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const Providers = ({ children }: Props) => {
  return (
    <AuthProvider>
      <CookiesProvider>{children}</CookiesProvider>
    </AuthProvider>
  );
};

export default Providers;
