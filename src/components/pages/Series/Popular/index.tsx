import Media from "@/types/media";
import SecondaryCarousel from "@/components/isolated/SecondaryCarousel";
import Slide from "@/components/isolated/Slide";

import PopularIcon from "../../../../../public/assets/icons/popularIcon.svg";

interface PopularProps {
  series: Media[];
}

const Popular = ({ series }: PopularProps) => {
  return (
    <SecondaryCarousel
      sectionIcon={PopularIcon}
      title="Populares"
      seeMoreUrl="/series/popular"
    >
      {series?.map((serie) => (
        <Slide
          key={serie.id}
          media={serie}
          caption={serie.name}
          href={`/serie/${serie.id}`}
        />
      ))}
    </SecondaryCarousel>
  );
};

export default Popular;
