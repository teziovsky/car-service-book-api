// import React from "react";
import styled from "styled-components";

type Props = {
  primary?: boolean;
  children?: string | JSX.Element;
};

const Button = styled.button<Props>`
  padding: ${(p) => (p.children ? "8px 12px" : "5px")};
  color: ${(p) => (p.primary ? "black" : "yellow")};
  background-color: ${(p) => (p.primary ? "red" : "blue")};
  border: 1px solid transparent;
  transition: border-color 0.25s ease-in-out;

  &:hover {
    border-color: red;
  }
`;

Button.defaultProps = {
  primary: true,
};

export default Button;
