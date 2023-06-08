"use client";

import Media from "@/@types/media";
import Image from "next/image";
import { useEffect, useState } from "react";

import StarIcon from "../../../../public/assets/icons/star.svg";
import Button from "../Button";
import CarouselIndicator from "./Components/CarouselIndicator";

interface CarouselProps {
  medias: Media[];
}
const Carousel = ({ medias }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const item = medias[activeIndex];
  const rand = Math.random();

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setActiveIndex((prevState) => {
        if (prevState === 4) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <div className="overflow-hidden relative h-[702px]">
      <div className="absolute top-[-35%] left-0 z-0 w-[1920px] h-[1080px] ">
        <Image
          key={rand}
          className="blur-carouselBackground animate-fadeImage h-[1080px]"
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={item.title}
          fill
        />
      </div>

      <div className="w-[1280px] h-[650px] m-auto mt-14 pt-20 relative grid grid-cols-12 gap-4">
        <div
          key={item?.id}
          className="flex items-center col-start-1 col-end-10"
        >
          <div className="mr-5 w-[13.4rem] h-[266px] pl-[2.32rem]">
            <Image
              className="w-auto h-auto"
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title}
              width={211}
              height={316}
            />
          </div>

          <div className="flex flex-col justify-start">
            <h1 className="text-white text-2xl drop-shadow-carouselDetails">
              {item?.title}
            </h1>

            <h1 className="text-white text-2xl drop-shadow-carouselDetails">
              {item?.year}
            </h1>

            <div className="flex justify-center items-center w-[fit-content]">
              <Image className="w-[50px]" src={StarIcon} alt="Star" priority />
              <span className="text-white text-2xl drop-shadow-carouselDetails">
                {item.vote_average.toFixed(2)}
              </span>
            </div>

            <p className="text-white text-base drop-shadow-carouselDetails w-[27rem] max-h-24 overflow-hidden line-clamp-4">
              {item.overview}
            </p>

            <Button>Ver Mais</Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col col-start-1 col-end-13">
          <h2 className="text-white text-xl drop-shadow-carouselDetails mb-4">
            Trending
          </h2>

          <div className="flex justify-around">
            {medias.map((carouselItem, index) => {
              if (index >= 5) return;
              return (
                <CarouselIndicator
                  key={carouselItem.id}
                  title={carouselItem.title}
                  backdrop_path={carouselItem.backdrop_path}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
