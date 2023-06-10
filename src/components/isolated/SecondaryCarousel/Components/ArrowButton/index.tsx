import Image from "next/image";
import { HTMLAttributes } from "react";

import ArrowImage from "../../../../../../public/assets/icons/arrow.svg";

interface ArrowButtonProps extends HTMLAttributes<HTMLButtonElement> {
  direction?: "left" | "right" | "up" | "down";
  breakDirection: boolean;
}

const ArrowButton = ({
  direction,
  onClick,
  breakDirection,
  ...rest
}: ArrowButtonProps) => {
  return (
    <button
      {...rest}
      className={`bg-gradient-to-b from-greenPrimary to-bluePrimary w-[44px] h-[44px] flex-grow-0 rounded-full flex items-center flex-shrink-0 justify-center
      ${
        (direction === "right" && "rotate-180") ||
        (direction === "down" && "rotate-270") ||
        (direction === "up" && "rotate-90")
      }
      ${
        !breakDirection &&
        "transition ease-in-out hover:brightness-[0.8] hover:scale-110 active:brightness-50"
      }
      ${breakDirection && "opacity-30"} ${rest.className}`}
      onClick={onClick}
      disabled={breakDirection}
    >
      <Image src={ArrowImage} alt="Arrow" />
    </button>
  );
};

export default ArrowButton;
