import { fetchWrapper } from "@/services/fetchWrapper";
import Media from "@/types/media";

const getUpcomingMovies = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "/movie/upcoming",
    {
      cache: "force-cache",
      next: { revalidate: 60 * 60 * 12 }, // 12 hours
    }
  );

  return results;
};

export default getUpcomingMovies;
