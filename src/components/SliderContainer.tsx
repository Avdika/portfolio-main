import React, { useState } from "react";
import MainSlide from "./MainSlide";
import ThumbnailStrip from "./ThumbnailStrip";
import { SliderContainerWrapper } from "../styles/SliderStyles";

interface SliderContainerProps {
  images: string[];
}

const SliderContainer: React.FC<SliderContainerProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <SliderContainerWrapper>
      <MainSlide images={images} currentImage={currentImage} />
      <ThumbnailStrip
        images={images}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </SliderContainerWrapper>
  );
};

export default SliderContainer;
