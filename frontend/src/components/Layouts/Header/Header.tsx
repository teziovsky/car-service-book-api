import cx from "classnames";
import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import Button from "components/Elements/Button/Button";
import Heading from "components/Elements/Heading/Heading";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DefaultProps } from "src/main";

import styles from "./Header.module.scss";

type Props = DefaultProps & {
  type: "Home" | "App";
  links: LinkType[];
};

const Header: FC<Props> = ({ type, links, className: passedClasses, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useNavigate();

  return (
    <header className={cx(styles.header, passedClasses)} {...props}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {!!links.length && <Navigation isOpen={isOpen} links={links} />}
      <Link className={cx(styles.headerLogo)} to="/">
        <Heading className={cx(styles.headerTitle)} level={1}>
          <span className={cx(styles.headerTitleHeading)}>Vehicle</span>
          <span className={cx(styles.headerTitleSubheading)}>Service Book</span>
        </Heading>
      </Link>
      {type === "Home" && (
        <Button
          onClick={() => route("/app")}
          color="accent"
          className={styles.headerCta}
          status="secondary"
          size="small">
          Go to app
        </Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  type: "Home",
};

export default Header;
