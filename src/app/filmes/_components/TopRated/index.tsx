import SecondaryCarousel from "@/components/isolated/SecondaryCarousel";
import Slide from "@/components/isolated/Slide";
import Media from "@/types/media";

import StarIcon from "../../../../../public/assets/icons/star.svg";

interface TopRatedProps {
  movies: Media[];
}

export default function TopRated({ movies }: TopRatedProps) {
  return (
    <SecondaryCarousel
      sectionIcon={StarIcon}
      title="Mais Bem Avaliados"
      seeMoreUrl="/top-rated-movies"
    >
      {movies?.map((movie) => (
        <Slide
          key={movie.id}
          media={movie}
          captionIcon={StarIcon}
          caption={movie.vote_average}
          href={`/movie/${movie.id}`}
        />
      ))}
    </SecondaryCarousel>
  );
}
