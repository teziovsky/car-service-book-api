import cx from "classnames";
import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import Modal from "components/Elements/Modal/Modal";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "src/components/Elements/Button/Button";
import Heading from "src/components/Elements/Heading/Heading";
import { DefaultProps } from "src/main";
import { api } from "src/plugins";

type Props = DefaultProps & {
  type: "Home" | "App";
  links?: LinkType[];
};

const Header = ({ type = "Home", links, className, ...props }: Props) => {
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
    <header className={cx("header", className)} {...props}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {links && !!links.length && <Navigation isOpen={isOpen} links={links} />}
      <Link className="header-logo" to="/">
        <Heading className="header-title" level={1}>
          <span className="header-heading">Vehicle</span>
          <span className="header-subheading">Service Book</span>
        </Heading>
      </Link>
      {type === "Home" && (
        <Button
          onClick={() => (isAuthenticated ? route("/app") : setIsModalOpen(true))}
          color="accent"
          status="secondary"
          size="small">
          {isAuthenticated ? "Go to App" : "Sign In"}
        </Button>
      )}
      {type === "App" && (
        <Button onClick={() => route("/")} color="accent" status="tertiary" size="small">
          Go to Home
        </Button>
      )}
      <Modal closeCb={handleCloseModal} isOpen={isModalOpen} title="Sign In">
        <Modal.Body>
          <p>test</p>
        </Modal.Body>
        <Modal.Footer>
          <p>test</p>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
