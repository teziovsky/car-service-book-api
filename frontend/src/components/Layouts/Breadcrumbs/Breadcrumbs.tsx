import cx from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const Breadcrumbs = ({ className }: Props) => {
  return (
    <nav className={cx("breadcrumbs", className)}>
      <ul className="breadcrumbs-list">
        <li className="breadcrumbs-item">
          <NavLink className="breadcrumbs-link" to={"/app"}>
            Cars
          </NavLink>
        </li>
        <li className="breadcrumbs-item">
          <NavLink className="breadcrumbs-link" to={"/app/cars/1"}>
            Honda Civic VIII
          </NavLink>
        </li>
        <li className="breadcrumbs-item">
          <NavLink className="breadcrumbs-link" to={"/app/cars/1/edit"}>
            Edit
          </NavLink>
        </li>
        <li className="breadcrumbs-item">
          <NavLink className="breadcrumbs-link" to={"/app/cars/1/edit"}>
            Edit repair
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
