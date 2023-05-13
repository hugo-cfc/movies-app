import DarkModeButton from "../components/isolated/DarkModeButton";

export const metadata = {
  title: "adad",
};

export default function Home() {
  return (
    <>
      <DarkModeButton />
      <h1 className="text-3xl font-bold underline text-black dark:text-white">
        Hello world!
      </h1>
    </>
  );
}
