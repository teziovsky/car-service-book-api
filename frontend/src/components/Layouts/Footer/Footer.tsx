import cx from "classnames";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

import styles from "./Footer.module.scss";

type Props = DefaultProps & {
  email?: string;
};

const Footer: FC<Props> = ({ email, className: passedClasses, ...props }) => {
  return (
    <footer className={cx(styles.footer, passedClasses)} {...props}>
      <div className={cx(styles.footerWrapper)}>
        <p className={cx(styles.footerText)}>
          Site made with{" "}
          <span aria-label="red heart emoji" role="img">
            ❤️
          </span>{" "}
          & React
        </p>
        <p className={cx(styles.footerText)}>Jakub Soboczyński &copy; 2022</p>
        {email && (
          <p className={cx(styles.footerText)}>
            Need help? Feel free to <a href={`mailto:${email}`}>Contact me!</a>
          </p>
        )}
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  email: "jakub.soboczynski@icloud.com",
};

export default Footer;
