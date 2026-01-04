"use client";

import Media from "@/types/media";
import Image from "next/image";

import StarIcon from "../../../../public/assets/icons/star.svg";
import Button from "../Button";
import CarouselIndicator from "./Components/CarouselIndicator";
import useCarousel from "./useCarousel";

export interface CarouselProps {
  medias: Media[];
}
export default function Carousel({ medias }: CarouselProps) {
  const { rand, states, item, carousel } = useCarousel({ medias });

  if (states.shouldBeNull) return null;

  return (
    <section className="overflow-hidden relative tablet:h-175.5 notebook:px-4 desktop:px-0">
      <div
        className={`absolute top-0 left-[-50%] z-0 aspect-video h-175 tablet:h-270 tablet:left-0 tablet:top-[-35%] ultrawide:left-1/2 ultrawide:-translate-x-1/2 w-full ${
          !states.hasBackdrop && "bg-white"
        }`}
      >
        <Image
          key={rand}
          className="blur-carouselBackground animate-fadeImage object-cover"
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={item.title || item.name || "Sem imagem"}
          fill
          quality={75}
          priority
        />
      </div>

      <div className="w-75 h-175 m-auto pt-20 relative tablet:grid table:mt-14 tablet:w-155 notebook:w-244.5 notebook:grid-cols-12 notebook:gap-4 desktop:w-7xl">
        <div
          key={item?.id}
          className="flex items-center flex-col tablet:flex-row notebook:col-start-1 notebook:col-end-10"
        >
          <div className="flex mb-4 w-52.75 h-79 tablet:mb-0 tablet:mr-5">
            <Image
              className="w-auto h-auto"
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title || item.name || "Sem imagem"}
              width={211}
              height={316}
              priority
            />
          </div>

          <div className="flex flex-col justify-start items-center tablet:items-start">
            <h1 className="text-white text-xl text-center drop-shadow-carouselDetails tablet:text-xl tablet:text-left notebook:text-2xl">
              {item?.title || item.name}
            </h1>

            <h1 className="hidden text-white drop-shadow-carouselDetails tablet:flex  tablet:text-xl notebook:text-2xl">
              {item?.year}
            </h1>

            <div className="hidden tablet:flex justify-center items-center w-fit">
              <Image
                className="tablet:w-7.5 notebook:w-12.5"
                src={StarIcon}
                alt="Star"
                priority
              />

              <span className="text-white drop-shadow-carouselDetails tablet:text-xl notebook:text-2xl">
                {String(item.vote_average.toFixed(1)).replace(".", ",")}
              </span>
            </div>

            <p className="hidden tablet:line-clamp-4 text-white text-xs drop-shadow-carouselDetails w-108 max-h-24 overflow-hidden notebook:text-base">
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
              if (index >= 5) return null;

              return (
                <CarouselIndicator
                  key={carouselItem.id}
                  title={carouselItem?.title || carouselItem?.name}
                  backdrop_path={carouselItem.backdrop_path}
                  isActive={carousel.isActive(index)}
                  onClick={() => carousel.onClick(index)}
                  onMouseEnter={() => carousel.onHover(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
