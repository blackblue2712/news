export const getImageUrl = (urls: Record<string, string>): string => {
  const sizes: string[] = Object.getOwnPropertyNames(urls);
  sizes
    .sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10))
    .reverse();
  const bigestImg = sizes[0];
  return urls[bigestImg];
};
