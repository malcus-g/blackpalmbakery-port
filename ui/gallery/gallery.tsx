import ImageSlider from '@/ui/gallery/image-slider';
import Quote from '@/ui/quote';
import fs from 'fs';
import path from 'path';
import HeadingDivider from '../layout/heading-divider';

const imageDirectory: string = path.join(process.cwd(), '/public/gallery');
const imageFilenames: string[] = fs.readdirSync(imageDirectory);

export default function Gallery() {
  return (
    <div className="flex flex-col w-[90%] items-center justify-center">
      <h3 className="mb-5 sm:mb-8 md:mb-10">Gallery</h3>
      <HeadingDivider />
      <ImageSlider imageFilenames={imageFilenames} imageDirectory={imageDirectory} />
      <Quote quote="Home is where the heart is. Heart is where cookie is. Math clear: home is cookie." author="Cookie Monster" />
    </div>
  )
}
