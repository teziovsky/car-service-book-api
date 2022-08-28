import { StyledFooter, StyledText, StyledWrapper } from "components/Layouts/Footer/Footer.styled";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  email?: string;
};

const Footer: FC<Props> = ({ email, ...props }) => {
  return (
    <StyledFooter {...props}>
      <StyledWrapper>
        <StyledText>
          Site made with{" "}
          <span aria-label="red heart emoji" role="img">
            ❤️
          </span>{" "}
          & React
        </StyledText>
        <StyledText>Jakub Soboczyński &copy; 2022</StyledText>
        {email && (
          <StyledText>
            Need help? Feel free to <a href={`mailto:${email}`}>Contact me!</a>
          </StyledText>
        )}
      </StyledWrapper>
    </StyledFooter>
  );
};

Footer.defaultProps = {
  email: "jakub.soboczynski@icloud.com",
};

export default Footer;
