import SecondaryCarousel from "@/components/isolated/SecondaryCarousel";
import Slide from "@/components/isolated/Slide";
import Media from "@/types/media";
import formatDate from "@/utils/formatDate";

import ComingIcon from "../../../../../public/assets/icons/comingIcon.svg";

interface UpcomingProps {
  movies: Media[];
}

export default function Upcoming({ movies }: UpcomingProps) {
  return (
    <SecondaryCarousel
      sectionIcon={ComingIcon}
      title="Em Breve nos Cinemas"
      seeMoreUrl="/upcoming-movies"
    >
      {movies?.map((movie) => (
        <Slide
          key={movie.id}
          media={movie}
          caption={formatDate(movie.release_date)}
          href={`/movie/${movie.id}`}
        />
      ))}
    </SecondaryCarousel>
  );
}
