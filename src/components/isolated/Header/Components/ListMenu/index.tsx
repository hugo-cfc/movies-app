"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuItems } from "../../strings";

const ListMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden tablet:flex tablet:items-center tablet:col-start-2 tablet:col-end-6">
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
        {menuItems.map((item) => (
          <li key={item.id} className="w-[50px] notebook:w-[70px]">
            <div className="p-2 flex justify-center text-white transition ease-in-out hover:scale-110 duration-300 tablet:text-sm notebook:text-base">
              <Link href={item.path}>{item.title}</Link>
            </div>
            {pathname === item.path && (
              <div className="bg-gradient-to-r from-greenPrimary to-bluePrimary h-[2px]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListMenu;
