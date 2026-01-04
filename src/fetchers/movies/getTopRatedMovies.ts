import { fetchWrapper } from "@/services/fetchWrapper";
import Media from "@/types/media";

const getTopRatedMovies = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "/movie/top_rated",
    {
      cache: "force-cache",
      next: { revalidate: 60 * 60 * 12 }, // 12 hours
    }
  );

  return results;
};

export default getTopRatedMovies;
