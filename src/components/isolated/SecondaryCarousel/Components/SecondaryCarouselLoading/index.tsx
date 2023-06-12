import SlideLoading from "@/components/isolated/Slide/Components/SlideLoading";

const SecondaryCarousel = () => {
  const SlidesLoadingMock = Array(6)
    .fill(null)
    .map((_, index) => (
      <SlideLoading key={index + Math.floor(Math.random() * 20)} />
    ));

  return (
    <div className="w-[300px] m-auto h-fit mt-8 tablet:mt-12 tablet:w-[620px] notebook:w-[1024px] desktop:w-[1280px]">
      <div className="grid grid-cols-4 tablet:grid-cols-8 notebook:grid-cols-12 notebook:gap-x-4 mb-7">
        <div className="h-10 bg-gray-500 animate-pulse col-start-1 col-end-3 tablet:col-end-6 notebook:col-end-6" />

        <div className="h-10 bg-gray-500 col-start-4 col-end-5 tablet:col-start-7 tablet:col-end-9 tablet:text-2xl notebook:col-start-11 notebook:col-end-12 animate-pulse" />

        <div className="mt-2 bg-gradient-to-t from-greenPrimary to-bluePrimary h-[2px] col-start-1 col-end-13 tablet:mt-3" />
      </div>

      <div className="flex items-center justify-center">
        <div className="hidden tablet:block w-[44px] h-[44px] rounded-full bg-gray-700 shrink-0" />

        <div className="overflow-x-auto flex gap-[5px] snap-mandatory scroll-smooth snap-x scrollbar-hide mx-0 tablet:ml-[1.69rem] tablet:mr-[1.96rem]">
          {SlidesLoadingMock}
        </div>

        <div className="hidden tablet:block w-[44px] h-[44px] rounded-full bg-gray-700 shrink-0" />
      </div>
    </div>
  );
};

export default SecondaryCarousel;
