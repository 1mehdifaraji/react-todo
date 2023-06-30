import { FC, HTMLProps, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  onClick?: () => void;
  loading?: boolean;
  danger?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  loading,
  danger,
}) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`rounded-xl py-2 px-4 ${
        danger ? "bg-red-500" : "bg-blue-400"
      } transition-all text-sm space-x-2 text-white ${
        className ? className : ""
      }`}
    >
      {loading ? "Loading" : children}
    </button>
  );
};

export default Button;
