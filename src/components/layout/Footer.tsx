import { FC } from "react";

const Footer: FC = () => (
  <footer className="border-t-[1px] border-gray-300">
    All Rights Reserved {new Date().getFullYear()} Mehdi Faraji
  </footer>
);

export default Footer;
