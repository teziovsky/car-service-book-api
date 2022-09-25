import Heading from "components/Elements/Heading/Heading";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="header-logo" to="/">
      <Heading className="header-title" level={1}>
        <span className="header-heading">Vehicle</span>
        <span className="header-subheading">Service Book</span>
      </Heading>
    </Link>
  );
}

export default Logo;
