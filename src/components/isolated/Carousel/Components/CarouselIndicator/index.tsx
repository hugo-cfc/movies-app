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
      className="overflow-hidden relative w-[13.3rem] h-[6.6rem] rounded-[0.68rem] flex items-center justify-center mb-16 transition ease-in-out hover:scale-110 duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 z-0 w-[13.3rem] h-[6.6rem]">
        <Image
          className="blur-sm"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
          fill
        />
      </div>
      <h1 className="text-white text-xl relative z-[1] text-center">{title}</h1>
      {isActive && (
        <div className="absolute bottom-0 w-full bg-gradient-to-r from-greenPrimary to-bluePrimary h-[4px]" />
      )}
      `
    </div>
  );
};

export default CarouselIndicator;
