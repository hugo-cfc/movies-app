import Carousel from "@/components/isolated/Carousel";
import TrendingPeople from "@/components/pages/Home/PeopleTreding";
import TopRated from "@/components/pages/Home/TopRated";
import Upcoming from "@/components/pages/Home/Upcoming";
import getTopRatedMovies from "@/fetchers/movies/getTopRatedMovies";
import getTrendingMovies from "@/fetchers/movies/getTrendingMovies";
import getUpcomingMovies from "@/fetchers/movies/getUpcomingMovies";
import getTrendingPeople from "@/fetchers/people/getTrendingPeople";

// import DarkModeButton from "../components/isolated/DarkModeButton";

export const metadata = {
  title: "Movies App",
};

export default async function Home() {
  const [trendingMovies, topRatedMovies, upcomingMovies, trendingPeople] =
    await Promise.all([
      getTrendingMovies(),
      getTopRatedMovies(),
      getUpcomingMovies(),
      getTrendingPeople(),
    ]);

  return (
    <>
      <Carousel medias={trendingMovies} />
      <TopRated movies={topRatedMovies} />
      <Upcoming movies={upcomingMovies} />
      <TrendingPeople people={trendingPeople} />
    </>
  );
}
