import React from "react";
import { ThumbnailStripWrapper, ThumbnailImage } from "../styles/SliderStyles";

interface ThumbnailStripProps {
  images: string[];
  currentImage: number;
  setCurrentImage: (index: number) => void;
}

const ThumbnailStrip: React.FC<ThumbnailStripProps> = ({
  images,
  currentImage,
  setCurrentImage,
}) => {
  return (
    <ThumbnailStripWrapper>
      {images.map((image, index) => (
        <ThumbnailImage
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => setCurrentImage(index)}
          style={{
            border: currentImage === index ? "2px solid blue" : "none",
          }}
        />
      ))}
    </ThumbnailStripWrapper>
  );
};

export default ThumbnailStrip;
