import { fetchWrapper } from "@/services/fetchWrapper";
import Media from "@/types/media";

const getTrendingMovies = async () => {
  const data = await fetchWrapper<{ results: Media[] }>(
    "/trending/movie/week",
    {
      cache: "force-cache",
      next: { revalidate: 60 * 60 * 12 }, // 12 hours
    }
  );

  const results = data.results;

  return results;
};

export default getTrendingMovies;
