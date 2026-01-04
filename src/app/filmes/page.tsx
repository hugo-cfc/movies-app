import Trending from "@/components/isolated/Carousel";
import getTopRatedMovies from "@/fetchers/movies/getTopRatedMovies";
import getTrendingMovies from "@/fetchers/movies/getTrendingMovies";
import getUpcomingMovies from "@/fetchers/movies/getUpcomingMovies";
import getTrendingPeople from "@/fetchers/people/getTrendingPeople";

import TrendingPeople from "./_components/PeopleTreding";
import TopRated from "./_components/TopRated";
import Upcoming from "./_components/Upcoming";

// import DarkModeButton from "../components/isolated/DarkModeButton";

export default async function Movies() {
  const trendingMovies = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  const trendingPeople = await getTrendingPeople();

  return (
    <>
      <Trending medias={trendingMovies} />
      <TopRated movies={topRatedMovies} />
      <Upcoming movies={upcomingMovies} />
      <TrendingPeople people={trendingPeople} />
    </>
  );
}
