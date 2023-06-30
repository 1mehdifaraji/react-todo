import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ onChange, className, ...props }) => (
  <input
    spellCheck={false}
    className={`block border caret-black placeholder:text-red-300 rounded-xl w-full p-2 text-sm outline-none text-black ${className}`}
    onChange={(e) => onChange(e)}
    type="text"
    {...props}
  />
);

export default Input;
