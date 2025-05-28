'use client';

import { useRef } from 'react';
import { useSectionInView } from '@/lib/hooks';
import { aboutBlurbs } from '@/lib/data';
import { motion, useScroll, useTransform } from "framer-motion"
import HeadingDivider from '@/ui/layout/heading-divider';

export default function About() {
  const { ref } = useSectionInView("About", .25);

  return (
    <section 
        className="flex flex-col items-center justify-center max-w-7xl p-8 scroll-m-18" 
        id="about" 
        ref={ref}
    >
        <h3 className="mb-8">About us</h3>
        <HeadingDivider />
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

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [.65, 1]);

  return (
    <motion.div
      ref={scrollRef}
      className="flex flex-col mt-20"
    >
      <motion.h1 
        className="flex mb-14" 
        style={{ 
            opacity: opacityProgress 
        }}
      >
        {title}
      </motion.h1>
      <motion.ul 
        className="flex flex-col gap-6 md:gap-12"
        style={{
          opacity: opacityProgress
        }}
      >
          {body.map((item, index) => (
            <li key={index} className="font-semibold leading-relaxed">{item}</li>
          ))}
      </motion.ul>
    </motion.div>
  );
}
