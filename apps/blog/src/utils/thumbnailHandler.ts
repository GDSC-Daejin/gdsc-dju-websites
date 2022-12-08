import jpg1 from '../assets/thumbnails/Rectangle-81.jpg';
import webp1 from '../assets/thumbnails/Rectangle-81.webp';
import jpg2 from '../assets/thumbnails/Rectangle-82.jpg';
import webp2 from '../assets/thumbnails/Rectangle-82.webp';
import jpg3 from '../assets/thumbnails/Rectangle-83.jpg';
import webp3 from '../assets/thumbnails/Rectangle-83.webp';
import jpg4 from '../assets/thumbnails/Rectangle-84.jpg';
import webp4 from '../assets/thumbnails/Rectangle-84.webp';
import jpg5 from '../assets/thumbnails/Rectangle-85.jpg';
import webp5 from '../assets/thumbnails/Rectangle-85.webp';
import jpg6 from '../assets/thumbnails/Rectangle-86.jpg';
import webp6 from '../assets/thumbnails/Rectangle-86.webp';
const thumbnails = {
  '0': {
    webp: webp1,
    jpg: jpg1,
  },
  '1': {
    webp: webp2,
    jpg: jpg2,
  },
  '2': {
    webp: webp3,
    jpg: jpg3,
  },
  '3': {
    webp: webp4,
    jpg: jpg4,
  },
  '4': {
    webp: webp5,
    jpg: jpg5,
  },
  '5': {
    webp: webp6,
    jpg: jpg6,
  },
};

export const thumbnailHandler = (postId: number) => {
  const num = postId % 6;
  return thumbnails[String(num) as keyof typeof thumbnails];
};
