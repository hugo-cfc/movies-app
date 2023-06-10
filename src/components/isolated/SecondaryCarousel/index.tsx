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
    <div className="w-[300px] m-auto h-fit mt-8 tablet:mt-12 tablet:w-[620px] desktop:w-[1280px]">
      <div className="grid grid-cols-4 tablet:grid-cols-8 notebook:grid-cols-12 notebook:gap-x-4 mb-7">
        <div className="flex items-center justify-start col-start-1 col-end-4 tablet:col-end-6 notebook:col-end-6">
          <Image
            className="w-6 mr-1.5 tablet:w-auto tablet:mr-[1.13rem]"
            src={sectionIcon}
            alt={title}
          />
          <h1 className="text-white text-sm tablet:text-2xl desktop:text-[2rem]">
            {title}
          </h1>
        </div>

        <Link
          className="text-white text-sm flex items-center col-start-4 col-end-5 tablet:col-start-7 tablet:col-end-9 tablet:text-2xl notebook:col-start-11 notebook:col-end-13"
          href={seeMoreUrl}
        >
          Ver Mais
          <Image
            className="w-2 ml-1 tablet:w-auto tablet:ml-[0.5rem]"
            src={ShortArrowIcon}
            alt="arrow"
          />
        </Link>

        <div className="mt-2 bg-gradient-to-t from-greenPrimary to-bluePrimary h-[2px] col-start-1 col-end-13 tablet:mt-3" />
      </div>

      <div className="flex items-center justify-center">
        <ArrowButton
          onClick={handleScrollLeft}
          breakDirection={isScrollAtLeft}
          className="hidden tablet:flex"
        />

        <div
          className="overflow-x-auto flex gap-[0.94rem] snap-mandatory scroll-smooth snap-x scrollbar-hide mx-0 tablet:ml-[1.69rem] tablet:mr-[1.96rem]"
          id="carouselContainer"
          ref={carouselRef}
        >
          {children}
        </div>

        <ArrowButton
          direction="right"
          onClick={handleScrollRight}
          breakDirection={isScrollAtRight}
          className="hidden tablet:flex"
        />
      </div>
    </div>
  );
};

export default SecondaryCarousel;
