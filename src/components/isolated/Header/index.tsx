import Image from "next/image";
import Link from "next/link";

import MovieDPLogo from "../../../../public/assets/logos/movieDBLogo.svg";
import Input from "../Input";
import DarkBackground from "./Components/DarkBackground";
import ListMenu from "./Components/ListMenu";
import MobileMenu from "./Components/MobileMenu";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black to-transparent bg-opacity-30 w-screen h-[70px] flex items-center fixed z-10">
      <DarkBackground />

      <div className="w-screen px-4 grid grid-cols-4 z-10 tablet:grid-cols-8 tablet:gap-2 tablet:w-[620px] tablet:m-auto notebook:w-[1280px] notebook:gap-4 notebook:grid-cols-12">
        <MobileMenu />

        <div className="flex justify-center items-center col-start-2 col-end-4 tablet:col-start-1 tablet:col-end-1 tablet:justify-start">
          <Link href="/">
            <Image
              className="w-[50px]"
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
