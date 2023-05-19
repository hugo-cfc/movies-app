import People from "@/@types/people";
import SecondaryCarousel from "@/components/isolated/SecondaryCarousel";
import Slide from "@/components/isolated/Slide";

import ComingIcon from "../../../../../public/assets/icons/trendingPeople.svg";

interface TrendingPeopleProps {
  people: People[];
}

const TrendingPeople = ({ people }: TrendingPeopleProps) => {
  return (
    <SecondaryCarousel
      sectionIcon={ComingIcon}
      title="Personalidades mais populares"
      seeMoreUrl="/trending-people"
    >
      {people?.map((person) => (
        <Slide
          key={person.id}
          person={person}
          caption={person.name}
          href={`/people/${person.id}`}
        />
      ))}
    </SecondaryCarousel>
  );
};

export default TrendingPeople;
