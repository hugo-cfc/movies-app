import Image from "next/image";

interface CarouselIndicatorProps {
  title: string;
  backdrop_path: string;
}

const CarouselIndicator = ({
  title,
  backdrop_path,
}: CarouselIndicatorProps) => {
  return (
    <div className="overflow-hidden relative w-[13.3rem] h-[6.6rem] rounded-[0.68rem] flex items-center">
      <div className="absolute top-0 left-0 z-0 w-[13.3rem] h-[6.6rem]">
        <Image
          className="blur-sm"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
          fill
        />
      </div>

      <h1 className="text-white text-xl relative z-10 text-center">{title}</h1>
    </div>
  );
};

export default CarouselIndicator;
