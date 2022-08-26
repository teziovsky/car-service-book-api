import { StyledHeading } from "components/Elements/Heading/Heading.styled";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
};

const Heading: FC<Props> = ({ level, bold, children, ...props }) => {
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
