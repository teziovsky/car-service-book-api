import cx from "classnames";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { DefaultProps } from "src/main";

import styles from "./Breadcrumbs.module.scss";

type Props = DefaultProps & {};

const Breadcrumbs: FC<Props> = ({ className: passedClasses, ...props }) => {
  return (
    <ul className={cx(styles.breadcrumbs, passedClasses)} {...props}>
      <li className={cx(styles.breadcrumbsItem)}>
        <NavLink
          className={({ isActive }) =>
            isActive ? cx(styles.breadcrumbsLink, styles.active) : cx(styles.breadcrumbsLink)
          }
          to={"/app"}>
          Home
        </NavLink>
      </li>
      <li className={cx(styles.breadcrumbsItem)}>
        <NavLink
          className={({ isActive }) =>
            isActive ? cx(styles.breadcrumbsLink, styles.active) : cx(styles.breadcrumbsLink)
          }
          to={"/app/cars"}>
          Cars
        </NavLink>
      </li>
      <li className={cx(styles.breadcrumbsItem)}>
        <NavLink
          className={({ isActive }) =>
            isActive ? cx(styles.breadcrumbsLink, styles.active) : cx(styles.breadcrumbsLink)
          }
          to={"/app/cars/1"}>
          Honda Civic VIII
        </NavLink>
      </li>
      <li className={cx(styles.breadcrumbsItem)}>
        <NavLink
          className={({ isActive }) =>
            isActive ? cx(styles.breadcrumbsLink, styles.active) : cx(styles.breadcrumbsLink)
          }
          to={"/app/cars/1/edit"}>
          Edit
        </NavLink>
      </li>
    </ul>
  );
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
