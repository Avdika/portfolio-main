const loadImages = (folderPath: string, count: number): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= count; i++) {
    const imagePath = `${folderPath}image-${i}.png`;
    images.push(imagePath);
  }
  return images;
};

export default loadImages;
