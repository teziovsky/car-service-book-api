import cx from "classnames";
import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import Button from "components/Elements/Button/Button";
import Heading from "components/Elements/Heading/Heading";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DefaultProps } from "src/main";

import styles from "./HomeHeader.module.scss";

type Props = DefaultProps & {};

const links: LinkType[] = [
  {
    path: "/",
    name: "Home",
    anchor: true,
  },
  {
    path: "#test",
    name: "App",
    anchor: true,
  },
  {
    path: "/pricing",
    name: "Pricing",
    anchor: true,
  },
  {
    path: "/contact",
    name: "Contact",
    anchor: true,
  },
];

const HomeHeader: FC<Props> = ({ className: passedClasses, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useNavigate();

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
      <Button onClick={() => route("/app")} color="accent" className={styles.headerCta} status="secondary" size="small">
        Go to app
      </Button>
    </header>
  );
};

HomeHeader.defaultProps = {
  type: "Home",
};

export default HomeHeader;
