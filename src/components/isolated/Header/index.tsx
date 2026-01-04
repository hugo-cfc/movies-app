import Image from "next/image";
import Link from "next/link";

import MovieDPLogo from "../../../../public/assets/logos/movieDBLogo.svg";
import Input from "../Input";
import DarkBackground from "./Components/DarkBackground";
import ListMenu from "./Components/ListMenu";
import MobileMenu from "./Components/MobileMenu";

const Header = () => {
  return (
    <header className="bg-linear-to-b from-black to-transparent bg-opacity-30 w-screen h-17.5 flex items-center fixed z-10">
      <DarkBackground />

      <div className="w-screen px-4 grid grid-cols-4 z-10 tablet:grid-cols-8 tablet:gap-2 tablet:w-155 tablet:m-auto notebook:w-7xl notebook:gap-4 notebook:grid-cols-12 notebook:px-4 desktop:px-0">
        <MobileMenu />

        <div className="flex justify-center items-center col-start-2 col-end-4 tablet:col-start-1 tablet:col-end-1 tablet:justify-start">
          <Link href="/">
            <Image
              className="w-12.5"
              src={MovieDPLogo}
              alt="Movie DB"
              priority
            />
          </Link>
        </div>

        <ListMenu />

        <div className="col-start-4 col-end-5 tablet:col-start-6 tablet:col-end-9 notebook:col-start-10 notebook:col-end-13 flex justify-end items-center">
          <Input placeholder="Filme, série, ator, etc..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
