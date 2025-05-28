'use client';

import { useRef } from 'react';
import { useSectionInView } from '@/lib/hooks';
import { aboutBlurbs } from '@/lib/data';
import { motion, useScroll, useTransform } from "framer-motion"

export default function About() {
  const { ref } = useSectionInView("About", .25);

  return (
    <section 
        className="flex flex-col items-center justify-center max-w-7xl gap-30 p-8 scroll-m-18" 
        id="about" 
        ref={ref}
    >
        {
            aboutBlurbs.map((blurb: { title: string, body: string[] }, index) => (
                <Blurb
                    key={index}
                    title={blurb.title}
                    body={blurb.body}
                />
            ))
        }
    </section>
  )
}

function Blurb({ title, body }: { title: string, body: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [.85, 1]);

  return (
    <motion.div
      ref={scrollRef}
    >
      <motion.h1 
        className="mb-14" 
        style={{ 
            scale: scaleProgress,
            opacity: opacityProgress 
        }}
      >
        {title}
      </motion.h1>
      <ul className="flex flex-col gap-6 md:gap-12">
        {body.map((item, index) => (
          <li key={index} className="font-semibold leading-relaxed">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
