import Media from "@/@types/media";
import { fetchWrapper } from "@/services/fetchWrapper";

const getTrendingMovies = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "/trending/movie/week"
  );

  return results;
};

export default getTrendingMovies;
