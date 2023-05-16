import Image from "next/image";
import Link from "next/link";

import MovieDPLogo from "../../../../public/assets/logos/movieDBLogo.svg";
import Input from "../Input";
import ListMenu from "./Components/ListMenu";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-30 h-[70px] flex items-center">
      <div className="w-[1280px] m-auto grid grid-cols-12 gap-4">
        <div className="flex col-start-1 col-end-1 justify-center items-center">
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

        <div className="col-start-10 col-end-13 flex justify-end">
          <Input inputProps={{ placeholder: "Filme, série, ator, etc..." }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
