import Media from "@/@types/movie";
import Carousel from "@/components/isolated/Carousel";
import Header from "@/components/isolated/Header";
import { fetchWrapper } from "@/services/fetchWrapper";

// import DarkModeButton from "../components/isolated/DarkModeButton";

// export const metadata = {
//   title: "Movies App",
// };

export default async function Home() {
  const { results } = await fetchWrapper<{ results: Media[] }>(
    "/trending/movie/week"
  );

  return (
    <>
      <Header />
      <Carousel medias={results} />
    </>
  );
}
