import CarouselIndicatorLoading from "../CarouselIndicatorLoading";

const CarouselLoading = () => {
  const IndicatorLoadingMock = Array(5)
    .fill(null)
    .map((_, index) => (
      <CarouselIndicatorLoading key={index + Math.floor(Math.random() * 20)} />
    ));

  return (
    <div className="bg-gray-700 tablet:h-[702px]">
      <div className="animate-pulse w-[300px] h-[700px] m-auto pt-20 tablet:grid table:mt-14 tablet:w-[620px] notebook:w-[978px] notebook:grid-cols-12 notebook:gap-4 desktop:w-[1280px]">
        <div className="flex items-center flex-col tablet:flex-row notebook:col-start-1 notebook:col-end-10">
          <div className="animate-pulse bg-gray-500 mb-4 w-[211px] h-[316px] tablet:mb-0 tablet:mr-5"></div>

          <div className="flex flex-col justify-start items-center tablet:items-start">
            <h1 className="animate-pulse bg-slate-600 w-[260px] h-10"></h1>

            <h1 className="hidden tablet:flex"></h1>

            <div className="hidden tablet:flex justify-center items-center w-[fit-content] tablet:my-2">
              <div className="animate-pulse bg-slate-400 mr-4 h-10 tablet:w-[30px] notebook:w-[50px]" />
              <span className="bg-slate-300 block w-[100px] h-10"></span>
            </div>

            <p className="hidden bg-slate-500 w-[27rem] h-24 tablet:block"></p>

            <div className="animate-pulse py-4 bg-slate-600 rounded-full w-[14.6rem] mt-4 h-12 tablet:py-2 tablet:w-40 notebook:py-4 notebook:w-[14.6rem]" />
          </div>
        </div>

        <div className="mt-4 tablet:mt-16 flex flex-col col-start-1 col-end-13">
          <h2 className="text-white text-xl drop-shadow-carouselDetails mb-4">
            Trending
          </h2>

          <div className="flex justify-around">{IndicatorLoadingMock}</div>
        </div>
      </div>
    </div>
  );
};

export default CarouselLoading;
