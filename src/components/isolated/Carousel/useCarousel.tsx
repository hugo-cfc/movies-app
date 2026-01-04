import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { CarouselProps } from ".";

export default function useCarousel({ medias }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIndex = useMemo(
    () => Math.min(4, medias.length - 1),
    [medias.length]
  );
  const item = medias[activeIndex] ?? medias[0];
  const rand = Math.random();

  const isActive = (index: number) => index === activeIndex;

  const clearAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoAdvance = useCallback(() => {
    clearAutoAdvance();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevState) =>
        prevState >= maxIndex ? 0 : prevState + 1
      );
    }, 4000);
  }, [clearAutoAdvance, maxIndex]);

  const setActiveIndexAndResetTimer = useCallback(
    (index: number) => {
      setActiveIndex(index);
      startAutoAdvance();
    },
    [startAutoAdvance]
  );

  function handleIndicatorClick(index: number) {
    setActiveIndexAndResetTimer(index);
  }

  function handleIndicatorHover(index: number) {
    setActiveIndexAndResetTimer(index);
  }

  useEffect(() => {
    startAutoAdvance();
    return () => {
      clearAutoAdvance();
    };
  }, [startAutoAdvance, clearAutoAdvance]);

  useEffect(() => {
    setActiveIndex((prev) => {
      if (medias.length === 0) return 0;
      return Math.min(prev, maxIndex);
    });
  }, [medias.length, maxIndex]);

  return {
    rand,
    states: {
      shouldBeNull: !item,
      hasBackdrop: !!item?.backdrop_path,
    },
    item,
    carousel: {
      isActive,
      onClick: handleIndicatorClick,
      onHover: handleIndicatorHover,
    },
  };
}
