import Media from "@/@types/media";
import { fetchWrapper } from "@/services/fetchWrapper";

const getTrendingSeries = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "trending/tv/day"
  );

  return results;
};

export default getTrendingSeries;
