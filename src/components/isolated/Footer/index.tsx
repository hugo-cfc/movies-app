import Image from "next/image";
import Link from "next/link";

import MovieDPLogo from "../../../../public/assets/logos/movieDBLogo.svg";
import { footerItems } from "./strings";

const Footer = () => {
  return (
    <footer className="bg-background-backgroundLight mt-28">
      <div className="w-[300px] mx-auto pt-28 pb-20 flex flex-col grid-cols-12 gap-x-4 tablet:flex-row justify-around notebook:grid tablet:w-[620px] notebook:w-[1024px] px-4 desktop:w-[1280px]">
        <Image
          className="w-[60px] col-start-1 col-end-2 tablet:w-[94px]"
          src={MovieDPLogo}
          alt="Movie DB"
          priority
        />

        <div className="col-start-2 col-end-5 mt-7 mb-4 tablet:mt-0 tablet:mb-0 tablet:ml-10">
          <h1 className="text-white text-2xl mb-2">Links Úteis</h1>

          <ul>
            {footerItems.links.map((link) => (
              <li key={link.id} className="text-white text-sm hover:underline">
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-white text-2xl mb-2">Contatos</h1>

          <ul>
            {footerItems.contacts.map((contact) => (
              <li
                key={contact.id}
                className="text-white text-sm hover:underline"
              >
                <Link href={contact.path}>{contact.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
