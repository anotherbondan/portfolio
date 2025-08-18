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
    <Marquee pauseOnHover speed={75} direction={direction} className="py-3">
      {images.map((image, index) => (
        <Card
          key={index}
          className="group mx-2 flex h-4 w-4 border-1 border-card-hover cursor-help items-center justify-center rounded-xl p-6 md:mx-3 md:h-36 md:w-36 hover:scale-105 hover:border-purple-300 hover:shadow-[0_0_10px_theme('colors.purple.500')] transition"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full group-hover:blur-md"
            draggable="false"
          />
          <Card className="absolute hidden group-hover:block px-1 font-inter rounded-md border-1 border-card-hover">{image.alt}</Card>
        </Card>
      ))}
    </Marquee>
  );
};

export default Slider;
