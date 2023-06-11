import Carousel from "@/components/isolated/Carousel";
import Popular from "@/components/pages/Series/Popular";
import TopRated from "@/components/pages/Series/TopRated";
import getPopularSeries from "@/fetchers/series/getPopularSeries";
import getTopRatedSeries from "@/fetchers/series/getTopRatedSeries";
import getTrendingSeries from "@/fetchers/series/getTrendingSeries";

// import DarkModeButton from "../components/isolated/DarkModeButton";

export const metadata = {
  title: "Movies App",
};

export default async function Series() {
  const trendingMovies = await getTrendingSeries();
  const topRatedSeries = await getTopRatedSeries();
  const popularSeries = await getPopularSeries();

  return (
    <>
      <Carousel medias={trendingMovies} />
      <TopRated series={topRatedSeries} />
      <Popular series={popularSeries} />
    </>
  );
}
