import Media from "@/@types/media";
import { fetchWrapper } from "@/services/fetchWrapper";

const getPopularSeries = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>("/tv/popular");

  return results;
};

export default getPopularSeries;
