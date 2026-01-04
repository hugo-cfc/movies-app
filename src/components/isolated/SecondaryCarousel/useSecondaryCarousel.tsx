import { useCallback, useEffect, useRef, useState } from "react";

export default function useSecondaruCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isScrollAtLeft, setIsScrollAtLeft] = useState(true);
  const [isScrollAtRight, setIsScrollAtRight] = useState(false);

  const handleScrollLeft = useCallback(() => {
    carouselRef.current?.scrollBy(-200, 0);
  }, [carouselRef]);

  const handleScrollRight = useCallback(() => {
    carouselRef.current?.scrollBy(200, 0);
  }, [carouselRef]);

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

  return {
    carouselRef,
    isScrollAtLeft,
    isScrollAtRight,
    handleScrollLeft,
    handleScrollRight,
  };
}
