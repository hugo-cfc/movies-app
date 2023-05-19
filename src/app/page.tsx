import Carousel from "@/components/isolated/Carousel";
import Header from "@/components/isolated/Header";
import SecondaryCarousel from "@/components/isolated/SecondaryCarousel";
import getTopRatedMovies from "@/fetchers/getTopRatedMovies";
import getTrendingMovies from "@/fetchers/getTrendingMovies";

import StarIcon from "../../public/assets/icons/star.svg";

// import DarkModeButton from "../components/isolated/DarkModeButton";

// export const metadata = {
//   title: "Movies App",
// };

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <>
      <Header />
      <Carousel medias={trendingMovies} />
      <SecondaryCarousel
        title="Mais Bem Avaliados"
        sectionIcon={StarIcon}
        captionIcon={StarIcon}
        medias={topRatedMovies}
      />
    </>
  );
}
