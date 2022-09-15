import { StyledFooter, StyledText, StyledWrapper } from "components/Layouts/Footer/Footer.styled";
import React from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  email?: string;
};

const Footer = ({ email = "jakub.soboczynski@icloud.com", ...props }: Props) => {
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

export default Footer;
