'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion';

type ImageProps = {
  imageDirectory: string,
  imageFilenames: string[]
}

export default function ImageSlider(props: ImageProps) {
  const { ref } = useSectionInView("Gallery", .75);
  const { imageFilenames } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div id="gallery" ref={ref} className="flex flex-col h-fit justify-center items-center mt-12 scroll-mt-66">
      {
        !imageFilenames ? (
          <p className="text-center text-gray-500">Loading images...</p>
        ) : imageFilenames.length === 0 ? (
          <p className="text-center text-gray-500">No images found in the gallery.</p>
        ) :  
        (
            <div key={imageFilenames[slideIndex]} className="mb-6">
              <SlideItem image={imageFilenames[slideIndex]}  />
            </div>
        )
      }
      <SliderControls setSlideIndex={setSlideIndex} totalSlides={imageFilenames.length} />
    </div>
  )
}

function SlideItem({ image }: { image: string }) {
  return (
    <motion.div 
      key={image} 
      className="flex w-[300px] h-[300px] md:w-[575px] md:h-[575px] justify-center align-center mb-4"
      initial={{ opacity: 0, scale:.9 }}
      animate={{ opacity: 1, scale: 1}}
      exit={{ opacity: 0, scale: .9 }}
    >
      <Image
        src={`/gallery/${image}`} 
        alt={`Gallery image ${image}`}
        width={575}
        height={575}
        priority
        quality={95}
        className="rounded-lg shadow-lg object-cover"
      />
    </motion.div>
  ) 
}

function SliderControls({ setSlideIndex, totalSlides }: { setSlideIndex: React.Dispatch<React.SetStateAction<number>>, totalSlides: number}) {
  return (
    <div className="flex justify-between items-center w-full text-4xl ease-in">
      <IoIosArrowBack 
        onClick={() => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
        className="mt-2 hover:scale-115 hover:cursor-pointer" 
      />
      <IoIosArrowForward 
      onClick={() => setSlideIndex((prev) => (prev + 1) % totalSlides)}
      className="mt-2 hover:scale-115 hover:cursor-pointer" 
      />
    </div>
  )
}
