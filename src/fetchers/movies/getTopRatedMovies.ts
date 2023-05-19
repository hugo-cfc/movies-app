import Media from "@/@types/media";
import { fetchWrapper } from "@/services/fetchWrapper";

const getTopRatedMovies = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "/movie/top_rated"
  );

  return results;
};

export default getTopRatedMovies;
