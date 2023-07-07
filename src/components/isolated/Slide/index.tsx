import Media from "@/@types/media";
import People from "@/@types/people";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import PersonImg from "../../../../public/assets/person.png";

interface SlideProps {
  media?: Media;
  person?: People;
  captionIcon?: string | StaticImageData;
  caption?: string | number | null;
  href: string;
}

const Slide = ({ media, person, captionIcon, caption, href }: SlideProps) => {
  const imgUrl =
    media?.poster_path || person?.profile_path
      ? `https://image.tmdb.org/t/p/original${
          media?.poster_path || person?.profile_path
        }`
      : PersonImg;

  return (
    <Link href={href}>
      <div className="w-[123px] h-[184px] relative shrink-0 scale-[1] snap-start origin-center transition-transform duration-[0.5s] overflow-hidden tablet:w-[202px] tablet:h-[303px]">
        <Image
          className="transition ease-in-out hover:brightness-[0.2] hover:scale-110"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0sAv8DwADRQHI9WZCUQAAAABJRU5ErkJggg=="
          src={imgUrl}
          alt={media?.title || person?.name || "Photo"}
          fill
          sizes="10vw"
          quality={75}
        />
      </div>

      <div className="flex items-center justify-center mt-2">
        {captionIcon && (
          <Image
            className="w-5 mr-0.5 tablet:w-[2.13rem]"
            src={captionIcon}
            alt={"Caption Icon"}
            width={30}
            height={30}
            priority
          />
        )}
        <p className="text-center text-white text-xs tablet:text-base">
          {caption}
        </p>
      </div>
    </Link>
  );
};

export default Slide;
