import cx from "classnames";
import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import Logo from "components/Layouts/Logo/Logo";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import { useAuth } from "context/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Elements/Button/Button";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  links?: LinkType[];
};

const HeaderHome = ({ links, className, ...props }: Props) => {
  const route = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <header className={cx("header", className)} {...props}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {links && !!links.length && <Navigation isOpen={isOpen} links={links} />}
      <Logo />
      <Button onClick={() => route("/")} color="accent" status="tertiary" size="small">
        Go to Home
      </Button>
      <Button onClick={() => logout()} color="error" status="tertiary" icon="HiOutlineLogout" size="small">
        Logout
      </Button>
    </header>
  );
};

export default HeaderHome;
