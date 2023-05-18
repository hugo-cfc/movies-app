"use client";

import Image from "next/image";
import { HTMLAttributes, useState } from "react";

import SearchIcon from "../../../../public/assets/icons/searchIcon.svg";

type InputProps = HTMLAttributes<HTMLInputElement>;

const Input = (inputProps: InputProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <div
          className={`bg-black bg-opacity-30 border-bluePrimary border-2 rounded-3xl overflow-hidden flex pr-2 w-[100%] animate-[width_0.5s_ease-in-out]`}
        >
          <input
            type="text"
            className="bg-transparent text-sm placeholder:text-gray placeholder:text-sm px-2 py-1 flex-1 outline-none text-white"
            onBlur={() => setIsActive((prevState) => !prevState)}
            autoFocus
            {...inputProps}
          ></input>

          <Image
            className="w-[15px]"
            src={SearchIcon}
            alt="Pesquisar"
            priority
          />
        </div>
      ) : (
        <button
          className={`flex items-center transition ease-in-out hover:scale-150 duration-300`}
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          <Image
            className="w-[20px]"
            src={SearchIcon}
            alt="Pesquisar"
            priority
          />
        </button>
      )}
    </>
  );
};

export default Input;
