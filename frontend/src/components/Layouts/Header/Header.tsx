import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import Modal from "components/Elements/Modal/Modal";
import {
  StyledButton,
  StyledHeader,
  StyledLogo,
  StyledTitle,
  StyledTitleHeading,
  StyledTitleSubheading,
} from "components/Layouts/Header/Header.styled";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultProps } from "src/main";
import { api } from "src/plugins";

type Props = DefaultProps & {
  type: "Home" | "App";
  links?: LinkType[];
};

const Header = ({ type = "Home", links, ...props }: Props) => {
  const route = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    api
      .get("/user")
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <StyledHeader {...props}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {links && !!links.length && <Navigation isOpen={isOpen} links={links} />}
      <StyledLogo to="/">
        <StyledTitle level={1}>
          <StyledTitleHeading>Vehicle</StyledTitleHeading>
          <StyledTitleSubheading>Service Book</StyledTitleSubheading>
        </StyledTitle>
      </StyledLogo>
      {type === "Home" && (
        <StyledButton
          onClick={() => (isAuthenticated ? route("/app") : setIsModalOpen(true))}
          color="accent"
          status="secondary"
          size="small">
          {isAuthenticated ? "Go to App" : "Sign In"}
        </StyledButton>
      )}
      {type === "App" && (
        <StyledButton onClick={() => route("/")} color="accent" status="tertiary" size="small">
          Go to Home
        </StyledButton>
      )}
      <Modal closeCb={handleCloseModal} isOpen={isModalOpen} title="Sign In">
        <Modal.Body>
          <p>test</p>
        </Modal.Body>
        <Modal.Footer>
          <p>test</p>
        </Modal.Footer>
      </Modal>
    </StyledHeader>
  );
};

export default Header;
