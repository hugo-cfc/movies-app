"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import CloseIcon from "../../../../../../public/assets/icons/closeIcon.svg";
import MenuIcon from "../../../../../../public/assets/icons/menuIcon.svg";
import MovieDPLogo from "../../../../../../public/assets/logos/movieDBLogo.svg";
import { menuItems } from "../../strings";

const MobileMenu = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center col-start-1 col-end-2 tablet:hidden">
      {!isActive ? (
        <button onClick={() => setIsActive((prevState) => !prevState)}>
          <Image
            className="w-[25px]"
            src={MenuIcon}
            alt="Abrir menu"
            priority
          />
        </button>
      ) : (
        <div className="absolute top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-80 animate-fadeImage">
          <div>
            <div className="bg-black w-screen h-[70px] grid grid-cols-4 items-center px-2">
              <button
                className="flex justify-center items-center col-start-1 col-end-2"
                onClick={() => setIsActive((prevState) => !prevState)}
              >
                <Image
                  className="w-[20px]"
                  src={CloseIcon}
                  alt="Fechar menu"
                  priority
                />
              </button>

              <div className="flex justify-center items-center col-start-4 col-end-5 tablet:col-start-1 tablet:col-end-1">
                <Link href="/">
                  <Image
                    className="w-[50px]"
                    src={MovieDPLogo}
                    alt="Movie DB"
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="w-full mt-9 px-4">
              <ul className="flex-wrap items-center justify-center text-gray-900 dark:text-white">
                {menuItems.map((item) => (
                  <li key={item.id} className="w-full">
                    <div className="p-2 flex justify-start text-white transition ease-in-out hover:scale-110 duration-300">
                      <Link href={item.path}>{item.title}</Link>
                    </div>
                    {pathname === item.path && (
                      <div className="bg-gradient-to-r from-greenPrimary to-bluePrimary h-[2px]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MobileMenu;
