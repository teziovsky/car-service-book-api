import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  email?: string;
};

const Footer = ({ email = "jakub.soboczynski@icloud.com", className, ...props }: Props) => {
  return (
    <footer className={cx("footer", className)} {...props}>
      <div className="footer-wrapper">
        <p className="footer-text">
          Site made with{" "}
          <span aria-label="red heart emoji" role="img">
            ❤️
          </span>{" "}
          & React
        </p>
        {email && (
          <p className="footer-text">
            Need help? Feel free to <a href={`mailto:${email}`}>Contact me!</a>
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
