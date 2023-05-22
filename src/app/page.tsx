import Carousel from "@/components/isolated/Carousel";
import Footer from "@/components/isolated/Footer";
import Header from "@/components/isolated/Header";
import TrendingPeople from "@/components/pages/Home/PeopleTreding";
import TopRated from "@/components/pages/Home/TopRated";
import Upcoming from "@/components/pages/Home/Upcoming";
import getTopRatedMovies from "@/fetchers/movies/getTopRatedMovies";
import getTrendingMovies from "@/fetchers/movies/getTrendingMovies";
import getUpcomingMovies from "@/fetchers/movies/getUpcomingMovies";
import getTrendingPeople from "@/fetchers/people/getTrendingPeople";

// import DarkModeButton from "../components/isolated/DarkModeButton";

// export const metadata = {
//   title: "Movies App",
// };

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  const trendingPeople = await getTrendingPeople();

  return (
    <>
      <Header />
      <Carousel medias={trendingMovies} />
      <TopRated movies={topRatedMovies} />
      <Upcoming movies={upcomingMovies} />
      <TrendingPeople people={trendingPeople} />
      <Footer />
    </>
  );
}
