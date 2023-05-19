"use client";

import Media from "@/@types/media";
import Image, { StaticImageData } from "next/image";
import { useCallback, useRef } from "react";

import ArrowButton from "./Components/ArrowButton";
import Slide from "./Components/Slide";

interface CarouselProps {
  sectionIcon: string | StaticImageData;
  captionIcon?: string | StaticImageData;
  title: string;
  medias: Media[];
  caption?: string;
}

const SecondaryCarousel = ({
  medias,
  sectionIcon,
  captionIcon,
  title,
  caption,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = useCallback(() => {
    carouselRef.current?.scrollBy(-200, 0);
  }, [carouselRef]);

  const handleScrollRight = useCallback(() => {
    carouselRef.current?.scrollBy(200, 0);
  }, [carouselRef]);

  return (
    <div className="w-[1280px] m-auto h-fit mt-[4.63rem]">
      <div className="w-full flex items-center justify-start">
        <Image className="mr-[1.13rem]" src={sectionIcon} alt={title} />
        <h1 className="text-white dark:text-black text-[2rem]">{title}</h1>
      </div>

      <div className="flex items-center justify-center">
        <ArrowButton onClick={handleScrollLeft} />

        <div
          className="overflow-x-auto flex gap-[0.94rem] snap-mandatory scroll-smooth snap-x scrollbar-hide ml-[1.69rem] mr-[1.96rem]"
          id="carouselContainer"
          ref={carouselRef}
        >
          {medias.map((item) => (
            <Slide
              key={item.id}
              slide={item}
              caption={caption}
              captionIcon={captionIcon}
            />
          ))}
        </div>

        <ArrowButton direction="right" onClick={handleScrollRight} />
      </div>
    </div>
  );
};

export default SecondaryCarousel;
