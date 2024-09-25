import React from "react";
import { MainSlideWrapper, MainSlideImage } from "../styles/SliderStyles";

interface MainSlideProps {
  images: string[];
  currentImage: number;
}

const MainSlide: React.FC<MainSlideProps> = ({ images, currentImage }) => {
  return (
    <MainSlideWrapper>
      <MainSlideImage
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
      />
    </MainSlideWrapper>
  );
};

export default MainSlide;
