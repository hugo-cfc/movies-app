import Media from "@/@types/media";
import { fetchWrapper } from "@/services/fetchWrapper";

const getUpcomingMovies = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "/movie/upcoming"
  );

  return results;
};

export default getUpcomingMovies;
