import styled from "styled-components";

// Container for the entire slider (Main slide + Thumbnails)
export const SliderContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

// Main slide wrapper with a larger image
export const MainSlideWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 10px;
`;

export const MainSlideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 1px solid #000; /* Add a 1px border */
`;

// Wrapper for the thumbnail strip
export const ThumbnailStripWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 100%;
  overflow-x: auto;
`;

// Style for each thumbnail image
export const ThumbnailImage = styled.img`
  width: 50px; /* Ensure this value is reflected on the page */
  height: auto;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #000; /* Add a 1px border */

  &:hover {
    opacity: 0.8;
  }
`;
