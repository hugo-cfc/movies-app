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
  const [trendingSeries, topRatedSeries, popularSeries] = await Promise.all([
    getTrendingSeries(),
    getTopRatedSeries(),
    getPopularSeries(),
  ]);

  return (
    <>
      <Carousel medias={trendingSeries} />
      <TopRated series={topRatedSeries} />
      <Popular series={popularSeries} />
    </>
  );
}
