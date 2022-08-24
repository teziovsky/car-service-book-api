import cx from "classnames";
import useBreakpoint from "hooks/useBreakpoint";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { DefaultProps } from "src/main";

import styles from "./Navigation.module.scss";

export type LinkType = {
  path: string;
  name: string;
  anchor?: boolean;
};

type Props = DefaultProps & {
  links: LinkType[];
  isOpen: boolean;
};

const Navigation: FC<Props> = ({ links, isOpen, className: passedClasses }) => {
  const breakpoint = useBreakpoint();

  return (
    <nav
      className={cx(styles.navigation, passedClasses, {
        [styles.mobile]: breakpoint === "sm" || breakpoint === "md",
        [styles.open]: isOpen,
      })}>
      <ul className={cx(styles.navigationList)}>
        {links.map((link) => (
          <li key={link.path} className={cx(styles.navigationItem)}>
            {link.anchor ? (
              <a className={cx(styles.navigationLink)} href={link.path}>
                {link.name}
              </a>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? cx(styles.navigationLink, styles.active) : cx(styles.navigationLink)
                }
                to={link.path}>
                {link.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.defaultProps = {
  anchor: false,
};

export default Navigation;
