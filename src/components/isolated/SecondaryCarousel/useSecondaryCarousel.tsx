import { RefObject, useCallback, useEffect, useState } from "react";

interface UseSecondaryCarousel {
  carouselRef: RefObject<HTMLDivElement>;
}

const useSecondaruCarousel = ({ carouselRef }: UseSecondaryCarousel) => {
  const [isScrollAtLeft, setIsScrollAtLeft] = useState(true);
  const [isScrollAtRight, setIsScrollAtRight] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const container = carouselRef.current;

      if (container) {
        setIsScrollAtLeft(container.scrollLeft === 0);

        setIsScrollAtRight(
          container?.scrollLeft ===
            container?.scrollWidth - container?.offsetWidth
        );
      }
    }

    carouselRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      carouselRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = useCallback(() => {
    carouselRef.current?.scrollBy(-200, 0);
  }, [carouselRef]);

  const handleScrollRight = useCallback(() => {
    carouselRef.current?.scrollBy(200, 0);
  }, [carouselRef]);

  return {
    handleScrollLeft,
    handleScrollRight,
    isScrollAtLeft,
    isScrollAtRight,
  };
};

export default useSecondaruCarousel;
