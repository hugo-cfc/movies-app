"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode, useRef } from "react";

import ShortArrowIcon from "../../../../public/assets/icons/shortArrow.svg";
import ArrowButton from "./Components/ArrowButton";
import useSecondaruCarousel from "./useSecondaryCarousel";

interface CarouselProps {
  sectionIcon: string | StaticImageData;
  title: string;
  children: ReactNode;
  seeMoreUrl: string;
}

const SecondaryCarousel = ({
  sectionIcon,
  title,
  seeMoreUrl,
  children,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const {
    handleScrollLeft,
    handleScrollRight,
    isScrollAtLeft,
    isScrollAtRight,
  } = useSecondaruCarousel({
    carouselRef,
  });

  return (
    <div className="w-[1280px] m-auto h-fit mt-[4.63rem]">
      <div className="grid grid-cols-12 gap-x-4 mb-7">
        <div className="flex items-center justify-start col-start-1 col-end-6">
          <Image className="mr-[1.13rem] mb-2" src={sectionIcon} alt={title} />
          <h1 className="text-white dark:text-black text-[2rem]">{title}</h1>
        </div>

        <Link
          className="text-white text-2xl dark:text-white col-start-11 col-end-13 flex items-center"
          href={seeMoreUrl}
        >
          Ver Mais
          <Image className="ml-[0.5rem]" src={ShortArrowIcon} alt="arrow" />
        </Link>

        <div className="bg-gradient-to-t from-greenPrimary to-bluePrimary h-[2px] col-start-1 col-end-13" />
      </div>

      <div className="flex items-center justify-center">
        <ArrowButton
          onClick={handleScrollLeft}
          breakDirection={isScrollAtLeft}
        />

        <div
          className="overflow-x-auto flex gap-[0.94rem] snap-mandatory scroll-smooth snap-x scrollbar-hide ml-[1.69rem] mr-[1.96rem]"
          id="carouselContainer"
          ref={carouselRef}
        >
          {children}
        </div>

        <ArrowButton
          direction="right"
          onClick={handleScrollRight}
          breakDirection={isScrollAtRight}
        />
      </div>
    </div>
  );
};

export default SecondaryCarousel;
