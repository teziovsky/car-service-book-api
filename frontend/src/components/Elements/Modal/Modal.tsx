import {
  StyledBackdrop,
  StyledBody,
  StyledButtonClose,
  StyledHeader,
  StyledHeading,
  StyledWrapper,
} from "components/Elements/Modal/Modal.styled";
import React, { FC, ReactNode } from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  wide?: boolean;
  showClose?: boolean;
  footer?: ReactNode | ReactNode[];
};

const Modal: FC<Props> = ({ title, titleLevel, wide, showClose, footer, children, ...props }) => {
  return (
    <>
      <StyledBackdrop></StyledBackdrop>
      <StyledWrapper wide={wide} {...props}>
        {showClose && <StyledButtonClose status="tertiary" size="default" icon="HiX" />}
        {title && (
          <StyledHeader>
            <StyledHeading level={titleLevel}>{title}</StyledHeading>
          </StyledHeader>
        )}
        <StyledBody>{children}</StyledBody>
        {footer}
      </StyledWrapper>
    </>
  );
};

Modal.defaultProps = {
  titleLevel: 5,
  wide: false,
  showClose: false,
};

export default Modal;
