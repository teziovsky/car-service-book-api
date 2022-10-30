import { PropsWithChildren, useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = PropsWithChildren & {};

const Layout = (props: Props) => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "car");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  return (
    <>
      <Header />
      <main className={"pt-16"}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
