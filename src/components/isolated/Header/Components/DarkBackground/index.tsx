"use client";

import { useEffect, useState } from "react";

const DarkBackground = () => {
  const [isTopOnThePage, setIsTopOnThePage] = useState(0);

  const handleScroll = () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    setIsTopOnThePage(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`absolute w-full h-full z-[1] ${
        isTopOnThePage != 0 && "bg-black opacity-60"
      }`}
    />
  );
};

export default DarkBackground;
