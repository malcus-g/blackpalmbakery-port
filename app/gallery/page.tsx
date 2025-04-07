import type { Metadata } from 'next';
import PageHeading from '@/ui/page-heading';
import ImageSlider from '@/ui/gallery/image-slider';
import SectionDivider from '@/ui/section-divider';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: "Gallery"
}
const imageDirectory: string = path.join(process.cwd(), '/public/gallery');
const imageFilenames: string[] = fs.readdirSync(imageDirectory);

export default function Gallery() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <PageHeading>Gallery</PageHeading>
      <SectionDivider />
      <ImageSlider imageFilenames={imageFilenames} imageDirectory={imageDirectory} />
    </div>
  )
}
