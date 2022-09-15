import {
  StyledBackdrop,
  StyledBody,
  StyledButtonClose,
  StyledHeader,
  StyledHeading,
  StyledWrapper,
} from "components/Elements/Modal/Modal.styled";
import FocusTrap from "focus-trap-react";
import React from "react";
import ReactDOM from "react-dom";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  wide?: boolean;
  closeCb?: () => void;
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
      {isOpen && closeCb && <StyledBackdrop onClick={closeCb} />}
      {isOpen && (
        <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
          <StyledWrapper wide={wide} {...props}>
            {closeCb && <StyledButtonClose status="tertiary" size="default" onClick={closeCb} icon="HiX" />}
            {title && (
              <StyledHeader>
                <StyledHeading level={titleLevel}>{title}</StyledHeading>
              </StyledHeader>
            )}
            {children}
          </StyledWrapper>
        </FocusTrap>
      )}
    </>,
    document.body
  );
};

const Body = ({ children }: DefaultProps) => <StyledBody>{children}</StyledBody>;
Body.displayName = "Body";
Modal.Body = Body;

const Footer = ({ children }: DefaultProps) => <>{children}</>;
Footer.displayName = "Footer";
Modal.Footer = Footer;

export default Modal;
