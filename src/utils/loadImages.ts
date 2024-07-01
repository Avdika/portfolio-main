const loadImages = (folderPath: string): string[] => {
  const images: string[] = [];
  try {
    const context = (require as any).context(`../../public${folderPath}`, false, /\.(png|jpe?g|svg)$/);
    context.keys().forEach((key: string) => {
      images.push(`${folderPath}${key.replace('./', '')}`);
    });
  } catch (e) {
    console.error(`Error loading images from ${folderPath}:`, e);
  }
  return images;
};

export default loadImages;
