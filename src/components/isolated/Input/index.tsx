"use client";

import Image from "next/image";
import { InputHTMLAttributes, useState } from "react";

import CloseIcon from "../../../../public/assets/icons/closeIcon.svg";
import SearchIcon from "../../../../public/assets/icons/searchIcon.svg";
import DarkBackground from "../Header/Components/DarkBackground";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (inputProps: InputProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {isActive ? (
        <>
          <div
            className={`hidden bg-black bg-opacity-30 border-bluePrimary border-2 rounded-3xl overflow-hidden pr-2 w-full animate-width tablet:flex tablet:h-7.5 notebook:h-full`}
          >
            <input
              type="text"
              className="bg-transparent text-sm placeholder:text-gray placeholder:text-sm px-2 notebook:py-1 flex-1 outline-none text-white"
              onBlur={() => setIsActive((prevState) => !prevState)}
              autoFocus
              {...inputProps}
            ></input>

            <Image className="w-5" src={SearchIcon} alt="Pesquisar" priority />
          </div>

          <button
            className={`flex items-center transition ease-in-out hover:scale-150 duration-300 animate-fadeImage tablet:hidden`}
            onClick={() => setIsActive((prevState) => !prevState)}
          >
            <Image
              className="w-5"
              src={CloseIcon}
              alt="Fechar pesquisa"
              priority
            />
          </button>

          <div className="absolute animate-fadeImage block top-18.75 left-0 w-screen h-12.5 tablet:hidden">
            <div className="flex bg-black bg-opacity-30 border-bluePrimary border-2 rounded-3xl overflow-hidden pr-2 w-full">
              <DarkBackground />
              <input
                type="text"
                className="bg-transparent text-sm placeholder:text-gray placeholder:text-sm px-2 py-2 flex-1 outline-none text-white"
                onBlur={() => setIsActive((prevState) => !prevState)}
                autoFocus
                {...inputProps}
              ></input>

              <Image
                className="w-3.75"
                src={SearchIcon}
                alt="Pesquisar"
                priority
              />
            </div>
          </div>
        </>
      ) : (
        <button
          className={`flex items-center transition ease-in-out hover:scale-150 duration-300`}
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          <Image
            className="w-5 tablet:w-3.75 notebook:w-5 cursor-pointer"
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
