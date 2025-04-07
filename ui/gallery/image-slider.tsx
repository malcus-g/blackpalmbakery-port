'use client';

import React from 'react';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';

type ImageProps = {
  imageDirectory: string,
  imageFilenames: string[]
}

export default function ImageSlider(props: ImageProps) {
  const { ref } = useSectionInView("Gallery", .01);

  const { imageFilenames } = props;

  return (
    <div ref={ref} className="flex justify-center items-center gap-8 flex-wrap p-6">
      {
        !imageFilenames ? (
          <p className="text-center text-gray-500">Loading images...</p>
        ) : imageFilenames.length === 0 ? (
          <p className="text-center text-gray-500">No images found in the gallery.</p>
        ) :  
        imageFilenames.map((file: string) => {
          return (
            <div key={file}>
              <SlideItem image={file}  />
            </div>
          )
        })
      }
    </div>
  )
}

function SlideItem({ image }: { image: string }) {
  return (
    <div key={image} className="flex w-[375px] h-[375px] justify-center align-center mb-4">
      <Image
        src={`/gallery/${image}`} 
        alt={`Gallery image ${image}`}
        width={350}
        height={300}
        priority
        quality={95}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  ) 
}
