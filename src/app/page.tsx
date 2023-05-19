import Carousel from "@/components/isolated/Carousel";
import Header from "@/components/isolated/Header";
import TopRated from "@/components/pages/Home/TopRated";
import Upcoming from "@/components/pages/Home/Upcoming";
import getTopRatedMovies from "@/fetchers/movies/getTopRatedMovies";
import getTrendingMovies from "@/fetchers/movies/getTrendingMovies";
import getUpcomingMovies from "@/fetchers/movies/getUpcomingMovies";

// import DarkModeButton from "../components/isolated/DarkModeButton";

// export const metadata = {
//   title: "Movies App",
// };

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <>
      <Header />
      <Carousel medias={trendingMovies} />
      <TopRated movies={topRatedMovies} />
      <Upcoming movies={upcomingMovies} />
    </>
  );
}
