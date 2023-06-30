import { FC, HTMLProps, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  onClick?: () => void;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, className, loading }) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`rounded-xl py-2 px-4 bg-blue-400 transition-all text-sm space-x-2 text-white ${
        className ? className : ""
      }`}
    >
      {loading ? "Loading" : children}
    </button>
  );
};

export default Button;
