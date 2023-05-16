import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-gradient-to-r from-greenPrimary to-bluePrimary py-4 rounded-full text-white font-semibold w-[14.6rem] mt-4 transition ease-in-out hover:brightness-[0.8] active:brightness-50">
      {children}
    </button>
  );
};

export default Button;
