import { useEffect, useState } from "react";
import breakpoints from "utils/breakpoints";

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (breakpoints.sm <= windowWidth && windowWidth < breakpoints.md) {
      setBreakPoint("sm");
    }
    if (breakpoints.md <= windowWidth && windowWidth < breakpoints.lg) {
      setBreakPoint("md");
    }
    if (breakpoints.lg <= windowWidth && windowWidth < breakpoints.xl) {
      setBreakPoint("lg");
    }
    if (breakpoints.xl <= windowWidth && windowWidth < breakpoints.xxl) {
      setBreakPoint("xl");
    }
    if (windowWidth >= breakpoints.xxl) {
      setBreakPoint("xxl");
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return breakpoint;
};

export default useBreakpoint;
