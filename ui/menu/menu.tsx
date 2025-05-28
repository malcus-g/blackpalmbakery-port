'use client';

import BPBmenu from '@/public/images/BPBmenu.png';
import Image  from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import HeadingDivider from '../layout/heading-divider';

export default function Menu() {
  const { ref } = useSectionInView("Menu", .25);

  return (
    <section id="menu" className="flex flex-col items-center justify-center scroll-mt-16" ref={ref}>
        <h3 className="mb-8">Menu</h3>
        <HeadingDivider />
        <Image
            src={BPBmenu}
            alt="Black Palm Bakery Menu"
            width={1200}
            height={1800}
            className="w-full h-auto max-w-3xl mx-auto my-18"
        >

        </Image>
    </section>
  )
}
