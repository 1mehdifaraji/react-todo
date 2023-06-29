import { FC } from "react";

const Footer: FC = () => (
  <footer className="border-t-[1px] border-gray-100 tracking-widest text-gray-400 text-xs text-center py-5">
    All Rights Reserved {new Date().getFullYear()} Mehdi Faraji
  </footer>
);

export default Footer;
