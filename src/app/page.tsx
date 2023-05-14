// import { fetchWrapper } from "@/services/fetchWrapper";

import DarkModeButton from "../components/isolated/DarkModeButton";

export const metadata = {
  title: "Movies App",
};

export default function Home() {
  // const res = await fetchWrapper("trending/all/day");

  return (
    <>
      <DarkModeButton />
      <h1 className="text-3xl font-bold underline text-black dark:text-white">
        Hello world!
      </h1>
    </>
  );
}
