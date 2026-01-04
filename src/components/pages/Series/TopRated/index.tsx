import Media from "@/types/media";
import SecondaryCarousel from "@/components/isolated/SecondaryCarousel";
import Slide from "@/components/isolated/Slide";

import StarIcon from "../../../../../public/assets/icons/star.svg";

interface TopRatedProps {
  series: Media[];
}

const TopRated = ({ series }: TopRatedProps) => {
  return (
    <SecondaryCarousel
      sectionIcon={StarIcon}
      title="Mais Bem Avaliadas"
      seeMoreUrl="/series/top-rated"
    >
      {series.map((serie) => (
        <Slide
          key={serie.id}
          media={serie}
          captionIcon={StarIcon}
          caption={serie.vote_average}
          href={`/serie/${serie.id}`}
        />
      ))}
    </SecondaryCarousel>
  );
};

export default TopRated;
