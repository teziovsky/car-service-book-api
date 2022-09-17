import cx from "classnames";
import Button from "components/Elements/Button/Button";
import FocusTrap from "focus-trap-react";
import React from "react";
import ReactDOM from "react-dom";
import { DefaultProps } from "src/main";

import Heading from "../Heading/Heading";

export type Props = DefaultProps & {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  wide?: boolean;
  closeCb?: Function;
  isOpen: boolean;
};

const Modal = ({ title, titleLevel = 5, wide = false, closeCb, isOpen = false, children, ...props }: Props) => {
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      closeCb && closeCb();
    }
  }

  React.useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return ReactDOM.createPortal(
    <>
      {isOpen && closeCb && <div className="modal-backdrop" />}
      {isOpen && (
        <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
          <div
            className={cx("modal", {
              wide: wide,
            })}
            {...props}>
            {closeCb && (
              <Button className="modal-close" status="tertiary" size="default" onClick={closeCb} icon="HiX" />
            )}
            {title && (
              <div className="modal-header">
                <Heading bold level={titleLevel}>
                  {title}
                </Heading>
              </div>
            )}
            {children}
          </div>
        </FocusTrap>
      )}
    </>,
    document.body
  );
};

const Body = ({ className, children }: DefaultProps) => <div className={cx("modal-body", className)}>{children}</div>;
Body.displayName = "Body";
Modal.Body = Body;

const Footer = ({ className, children }: DefaultProps) => (
  <div className={cx("modal-footer", className)}>{children}</div>
);
Footer.displayName = "Footer";
Modal.Footer = Footer;

export default Modal;
