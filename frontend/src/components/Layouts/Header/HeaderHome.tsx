import cx from "classnames";
import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import Modal from "components/Elements/Modal/Modal";
import HeaderLoginForm from "components/Layouts/Header/HeaderLoginForm";
import Logo from "components/Layouts/Logo/Logo";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import { useAuth } from "context/authContext";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Elements/Button/Button";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  links?: LinkType[];
};

const HeaderHome = ({ links, className, ...props }: Props) => {
  const route = useNavigate();
  const [cookies] = useCookies(["access_token"]);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, getUser } = useAuth();

  useEffect(() => {
    if (cookies.access_token) {
      getUser();
    }
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <header className={cx("header", className)} {...props}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {links && !!links.length && <Navigation isOpen={isOpen} links={links} />}
      <Logo />
      <div className="header-buttons">
        <Button
          onClick={() => (isAuthenticated ? route("/app") : setIsModalOpen(true))}
          color="accent"
          status="secondary"
          size="small">
          {isAuthenticated ? "Go to App" : "Sign In"}
        </Button>
      </div>
      <Modal closeCb={handleCloseModal} isOpen={isModalOpen} title="Sign In">
        <Modal.Body>
          <HeaderLoginForm closeCb={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default HeaderHome;
