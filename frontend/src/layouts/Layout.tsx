import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = PropsWithChildren & {};

const Layout = (props: Props) => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      <Header data-theme={isDark ? "vehicle" : "winter"} />
      <main className={"pt-16"} data-theme={isDark ? "vehicle" : "winter"}>
        {props.children}
      </main>
      <Footer data-theme={isDark ? "vehicle" : "winter"} />
    </>
  );
};

export default Layout;
