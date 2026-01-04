import Image from "next/image";
import { MouseEventHandler } from "react";

interface CarouselIndicatorProps {
  title?: string;
  name?: string;
  backdrop_path: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
}

export default function CarouselIndicator({
  title,
  name,
  backdrop_path,
  isActive,
  onClick,
  onMouseEnter,
}: CarouselIndicatorProps) {
  return (
    <div
      className="overflow-hidden relative w-14 h-14 rounded-[0.68rem] flex items-center justify-center mb-16 transition ease-in-out hover:scale-110 duration-300 cursor-pointer tablet:w-28 tablet:h-13 notebook:w-45 notebook:h-22 desktop:w-[13.3rem] desktop:h-[6.6rem]"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <div
        className={`absolute top-0 left-[-45%] z-0 aspect-video h-14 tablet:left-0 tablet:aspect-auto tablet:w-28 tablet:h-13 notebook:w-45 notebook:h-22 desktop:w-[13.3rem] desktop:h-[6.6rem] ${
          !backdrop_path && "bg-white"
        }`}
      >
        <Image
          className="tablet:blur-sm"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title || name || "Sem imagem"}
          fill
          sizes="25vw"
          quality={75}
          priority
        />
      </div>

      <h1 className="hidden text-white relative z-1 text-center tablet:block tablet:text-[10px] notebook:text-lg desktop:text-xl">
        {title || name}
      </h1>

      {isActive && (
        <div className="absolute bottom-0 w-full bg-linear-to-r from-greenPrimary to-bluePrimary h-1" />
      )}
    </div>
  );
}
