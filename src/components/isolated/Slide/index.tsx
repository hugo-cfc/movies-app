import FallbackImage from "@/../public/assets/images/fallback.png";
import Media from "@/types/media";
import People from "@/types/people";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SlideProps {
  media?: Media;
  person?: People;
  captionIcon?: string | StaticImageData;
  caption?: string | number | null;
  href: string;
}

export default function Slide({
  media,
  person,
  captionIcon,
  caption,
  href,
}: SlideProps) {
  return (
    <Link href={href}>
      <div className="w-30.75 h-46 relative shrink-0 scale-[1] snap-start origin-center transition-transform duration-500 overflow-hidden tablet:w-50.5 tablet:h-75.75">
        <Image
          className="transition ease-in-out hover:brightness-[0.8] hover:scale-110 object-cover"
          src={
            media?.poster_path || person?.profile_path
              ? `https://image.tmdb.org/t/p/original${
                  media?.poster_path || person?.profile_path
                }s`
              : FallbackImage
          }
          alt={media?.title || person?.name || "Photo"}
          fill
          sizes="10vw"
        />
      </div>

      <div className="flex items-center justify-center mt-2">
        {captionIcon && (
          <Image
            className="w-5 mr-0.5 tablet:w-[2.13rem]"
            src={captionIcon}
            alt={"Caption Icon"}
          />
        )}

        <p className="text-center text-white text-xs tablet:text-base">
          {caption}
        </p>
      </div>
    </Link>
  );
}
