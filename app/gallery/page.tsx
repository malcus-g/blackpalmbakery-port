import type { Metadata } from 'next';
import PageHeading from '@/ui/page-heading';
import ImageSlider from '@/ui/gallery/image-slider';
import SectionDivider from '@/ui/section-divider';
import Quote from '@/ui/quote';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: "Gallery"
}
const imageDirectory: string = path.join(process.cwd(), '/public/gallery');
const imageFilenames: string[] = fs.readdirSync(imageDirectory);

export default function Gallery() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-8">
      <PageHeading>Gallery</PageHeading>
      <SectionDivider />
      <Quote quote="Home is where the heart is. Heart is where cookie is. Math clear: home is cookie." author="Cookie Monster" />
      <ImageSlider imageFilenames={imageFilenames} imageDirectory={imageDirectory} />
    </div>
  )
}
