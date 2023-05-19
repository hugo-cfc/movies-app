import Media from "@/@types/media";
import Image, { StaticImageData } from "next/image";

import StarIcon from "../../../../../../public/assets/icons/star.svg";

interface SlideProps {
  slide: Media;
  captionIcon?: string | StaticImageData;
  caption?: string;
}

const Slide = ({ slide }: SlideProps) => {
  return (
    <div>
      <div className="w-[202px] h-[303px] relative shrink-0 scale-[1] snap-start origin-center transition-transform duration-[0.5s] overflow-hidden">
        <Image
          className="transition ease-in-out hover:brightness-[0.8] hover:scale-110"
          src={`https://image.tmdb.org/t/p/original${slide.poster_path}`}
          alt={slide.title}
          fill
        />
      </div>

      <div className="flex items-center justify-center mt-2">
        <Image className="w-[2.13rem]" src={StarIcon} alt="Star" />
        <p className="text-center text-white dark:text-black">awdkad</p>
      </div>
    </div>
  );
};

export default Slide;
