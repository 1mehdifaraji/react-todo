import { FC, HTMLProps, ReactNode } from "react";

interface StatusProps {
  className?: HTMLProps<HTMLElement>["className"];
  children: ReactNode;
  handleClick: () => void;
}

const Status: FC<StatusProps> = ({ className, children, handleClick }) => (
  <div
    onClick={handleClick}
    className={`w-full text-sm text-center cursor-pointer border-2 rounded-xl p-2 ${
      className ? className : ""
    }`}
  >
    {children}
  </div>
);

export default Status;
