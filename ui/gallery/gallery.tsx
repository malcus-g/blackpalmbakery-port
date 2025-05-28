import ImageSlider from '@/ui/gallery/image-slider';
import Quote from '@/ui/quote';
import fs from 'fs';
import path from 'path';

const imageDirectory: string = path.join(process.cwd(), '/public/gallery');
const imageFilenames: string[] = fs.readdirSync(imageDirectory);

export default function Gallery() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-8 scroll-mt-20" id="gallery">
      <ImageSlider imageFilenames={imageFilenames} imageDirectory={imageDirectory} />
      <Quote quote="Home is where the heart is. Heart is where cookie is. Math clear: home is cookie." author="Cookie Monster" />
    </div>
  )
}
