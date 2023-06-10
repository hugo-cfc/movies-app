import People from "@/@types/people";
import { fetchWrapper } from "@/services/fetchWrapper";

const getTrendingPeople = async () => {
  const { results } = await fetchWrapper<{ results: People[] }>(
    "/trending/person/week"
  );

  return results;
};

export default getTrendingPeople;
