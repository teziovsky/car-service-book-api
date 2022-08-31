import { StyledHeading } from "components/Elements/Heading/Heading.styled";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
};

const Heading = ({ level, bold, children, ...props }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledHeading as={Tag} level={level} bold={bold} {...props}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  bold: false,
  level: 6,
};

export default Heading;
