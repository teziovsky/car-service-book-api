import cx from "classnames";
import useBreakpoint from "hooks/useBreakpoint";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DefaultProps } from "src/main";

export type LinkType = {
  path: string;
  name: string;
  anchor?: boolean;
};

export type Props = DefaultProps & {
  links: LinkType[];
  isOpen: boolean;
};

const Navigation = ({ links, isOpen }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    setIsMobile(breakpoint === "sm" || breakpoint === "md");
  }, [breakpoint]);

  return (
    <nav
      className={cx("nav", {
        mobile: isMobile,
        opened: isOpen,
      })}>
      <ul className="nav-list">
        {links.map((link) => (
          <li className="nav-item" key={link.path}>
            {link.anchor ? (
              <a className="nav-link" href={link.path}>
                {link.name}
              </a>
            ) : (
              <NavLink className="nav-link" to={link.path}>
                {link.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
