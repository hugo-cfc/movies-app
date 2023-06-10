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
    <div className="overflow-hidden relative tablet:h-[702px] notebook:px-4 desktop:px-0">
      <div className="absolute top-0 left-[-50%] z-0 aspect-video h-[700px] tablet:h-[1080px] tablet:left-0 tablet:top-[-35%] ultrawide:left-1/2 ultrawide:-translate-x-1/2">
        <Image
          key={rand}
          className="blur-carouselBackground animate-fadeImage"
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={item.title}
          fill
          sizes="10vw"
          quality={30}
          priority={true}
        />
      </div>

      <div className="w-[300px] h-[700px] m-auto pt-20 relative tablet:grid table:mt-14 tablet:w-[620px] notebook:w-[978px] notebook:grid-cols-12 notebook:gap-4 desktop:w-[1280px]">
        <div
          key={item?.id}
          className="flex items-center flex-col tablet:flex-row notebook:col-start-1 notebook:col-end-10"
        >
          <div className="flex mb-4 w-[211px] h-[316px] tablet:mb-0 tablet:mr-5">
            <Image
              className="w-auto h-auto"
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title}
              width={211}
              height={316}
              priority={true}
            />
          </div>

          <div className="flex flex-col justify-start items-center tablet:items-start">
            <h1 className="text-white text-xl text-center drop-shadow-carouselDetails tablet:text-xl tablet:text-left notebook:text-2xl">
              {item?.title}
            </h1>

            <h1 className="hidden text-white drop-shadow-carouselDetails tablet:flex  tablet:text-xl notebook:text-2xl">
              {item?.year}
            </h1>

            <div className="hidden tablet:flex justify-center items-center w-[fit-content]">
              <Image
                className="tablet:w-[30px] notebook:w-[50px]"
                src={StarIcon}
                alt="Star"
                priority
              />
              <span className="text-white drop-shadow-carouselDetails tablet:text-xl notebook:text-2xl">
                {item.vote_average.toFixed(2)}
              </span>
            </div>

            <p className="hidden tablet:line-clamp-4 text-white text-xs drop-shadow-carouselDetails w-[27rem] max-h-24 overflow-hidden notebook:text-base">
              {item.overview}
            </p>

            <Button>Ver Mais</Button>
          </div>
        </div>

        <div className="mt-4 tablet:mt-16 flex flex-col col-start-1 col-end-13">
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
