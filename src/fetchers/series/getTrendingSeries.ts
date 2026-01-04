import { fetchWrapper } from "@/services/fetchWrapper";
import Media from "@/types/media";

const getTrendingSeries = async () => {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "trending/tv/day"
  );

  return results;
};

export default getTrendingSeries;
