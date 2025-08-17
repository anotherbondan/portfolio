import Card from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

interface Image {
  src: string;
  alt: string;
}

interface SliderProps {
  images: Image[];
  direction: "right" | "left" 
}

const Slider: React.FC<SliderProps> = ({ images, direction }) => {
  return (
    <Marquee pauseOnHover speed={75} direction={direction}>
      {images.map((image, index) => (
        <Card
          key={index}
          className="mx-2 flex h-[4.5rem] w-[4.5rem] border-1 border-card-hover cursor-help items-center justify-center rounded-xl p-4 md:mx-3 md:h-36 md:w-36"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full select-none object-contain transition-all duration-200"
            draggable="false"
          />
        </Card>
      ))}
    </Marquee>
  );
};

export default Slider;
