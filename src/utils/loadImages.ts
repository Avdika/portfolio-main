const loadImages = async (folderPath: string, maxImages: number = 10): Promise<string[]> => {
  const images: string[] = [];
  for (let i = 1; i <= maxImages; i++) {
    const imagePath = `${folderPath}image-${i}.png`;
    try {
      const response = await fetch(imagePath);
      if (response.ok) {
        images.push(imagePath);
      } else {
        break;
      }
    } catch (e) {
      console.error(`Error fetching image from ${imagePath}:`, e);
      break;
    }
  }
  return images;
};

export default loadImages;
