import Image from "next/image";
import { MouseEventHandler } from "react";

interface CarouselIndicatorProps {
  title: string;
  backdrop_path: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

const CarouselIndicator = ({
  title,
  backdrop_path,
  isActive,
  onClick,
}: CarouselIndicatorProps) => {
  return (
    <div
      className="overflow-hidden relative w-14 h-14 rounded-[0.68rem] flex items-center justify-center mb-16 transition ease-in-out hover:scale-110 duration-300 cursor-pointer tablet:w-28 tablet:h-[52px] notebook:w-[13.3rem] notebook:h-[6.6rem]"
      onClick={onClick}
    >
      <div className="absolute top-0 left-[-45%] z-0 aspect-video h-14 tablet:left-0 tablet:aspect-auto tablet:w-28 tablet:h-[52px] notebook:w-[13.3rem] notebook:h-[6.6rem]">
        <Image
          className="tablet:blur-sm"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
          fill
          sizes="30vw"
          quality={50}
          priority={true}
        />
      </div>
      <h1 className="hidden text-white relative z-[1] text-center tablet:block tablet:text-[10px] leading-[10px] notebook:text-xl">
        {title}
      </h1>
      {isActive && (
        <div className="absolute bottom-0 w-full bg-gradient-to-r from-greenPrimary to-bluePrimary h-[4px]" />
      )}
      `
    </div>
  );
};

export default CarouselIndicator;
