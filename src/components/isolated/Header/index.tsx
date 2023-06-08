import Image from "next/image";
import Link from "next/link";

import MovieDPLogo from "../../../../public/assets/logos/movieDBLogo.svg";
import Input from "../Input";
import DarkBackground from "./Components/DarkBackground";
import ListMenu from "./Components/ListMenu";
import MobileMenu from "./Components/MobileMenu";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black to-transparent bg-opacity-30 w-[100%] h-[50px] flex items-center fixed z-10 tablet:h-[70px]">
      <DarkBackground />

      <div className="w-screen px-4 grid grid-cols-4 z-10 tablet:w-[1280px] tablet:grid-cols-12 tablet:gap-4 tablet:m-auto">
        <MobileMenu />

        <div className="flex justify-center items-center col-start-2 col-end-4 tablet:col-start-1 tablet:col-end-1">
          <Link href="/">
            <Image
              className="w-[30px] tablet:w-[50px]"
              src={MovieDPLogo}
              alt="Movie DB"
              priority
            />
          </Link>
        </div>

        <ListMenu />

        <div className="col-start-4 col-end-5 tablet:col-start-10 tablet:col-end-13 flex justify-end">
          <Input placeholder="Filme, série, ator, etc..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
