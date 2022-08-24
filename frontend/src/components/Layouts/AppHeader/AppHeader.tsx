import cx from "classnames";
import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import Heading from "components/Elements/Heading/Heading";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { DefaultProps } from "src/main";

import styles from "./AppHeader.module.scss";

type Props = DefaultProps & {};

const links: LinkType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/app",
    name: "App",
  },
  {
    path: "/pricing",
    name: "Pricing",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const AppHeader: FC<Props> = ({ className: passedClasses, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cx(styles.header, passedClasses)} {...props}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {!!links.length && <Navigation links={links} />}
      <Link className={cx(styles.headerLogo)} to="/">
        <Heading className={cx(styles.headerTitle)} level={1}>
          <span className={cx(styles.headerTitleHeading)}>Vehicle</span>
          <span className={cx(styles.headerTitleSubheading)}>Service Book</span>
        </Heading>
      </Link>
    </header>
  );
};

AppHeader.defaultProps = {
  type: "Home",
};

export default AppHeader;
