import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

interface Image {
  src: string;
  alt: string;
}

interface SliderProps {
  images: Image[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <Marquee pauseOnHover speed={100} direction="left">
      {images.map((image, index) => (
        <div
          key={index}
          className="mx-2 flex h-[4.5rem] w-[4.5rem] cursor-help items-center justify-center rounded-xl p-4 border-4 md:mx-3 md:h-36 md:w-36"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full select-none object-contain transition-all duration-200"
            draggable="false"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default Slider;
