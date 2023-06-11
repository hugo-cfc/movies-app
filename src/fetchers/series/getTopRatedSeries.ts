import Media from "@/@types/media";
import { fetchWrapper } from "@/services/fetchWrapper";

const getTopRatedSeries = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>("tv/top_rated");

  return results;
};

export default getTopRatedSeries;
