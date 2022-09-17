import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {};

const Card = ({ className, children, ...props }: Props) => {
  return (
    <div className={cx("card-wrapper", className)} {...props}>
      {children}
    </div>
  );
};

const Header = ({ className, children }: DefaultProps) => (
  <div className={cx("flex items-center gap-2", className)}>{children}</div>
);
Header.displayName = "Header";
Card.Header = Header;

const Body = ({ className, children }: DefaultProps) => (
  <div className={cx("break-all text-sky-50", className)}>{children}</div>
);
Body.displayName = "Body";
Card.Body = Body;

const Footer = ({ className, children }: DefaultProps) => <div className={cx("break-all", className)}>{children}</div>;
Footer.displayName = "Footer";
Card.Footer = Footer;

export default Card;
