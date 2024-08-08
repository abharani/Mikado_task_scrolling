import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// const images = [
//   "/students.webp",
//   "/service12.webp",
//   "/jpg.webp",
//   "/advisor5.webp",
//   "/Bg.jpg",
//   "/land3.webp",
//   "/grad3.webp",
//   "/oversea.webp",
// ];