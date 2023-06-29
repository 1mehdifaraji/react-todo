import { FC } from "react";

import { Container } from "components";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="shadow-xl shadow-gray-600/5 py-0 md:py-4 text-base md:text-xl">
      <Container className="flex items-center justify-between">
        <Link className="flex items-center space-x-2 text-gray-500" to="/">
          <img
            className="w-5 md:w-10 h-5 md:h-10"
            alt="logo"
            src={require("../../assets/images/logo512.png")}
          />
          <div>React Todo</div>
        </Link>
        <div className="font-light">
          <a
            href={process.env.REACT_APP_LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            Mehdi Faraji
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Header;
