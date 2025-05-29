'use client';

import BPBmenu from '@/public/images/BPBmenu.png';
import Image  from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import HeadingDivider from '../layout/heading-divider';

export default function Menu() {
  const { ref } = useSectionInView("Menu", .25);

  return (
    <section id="menu" className="flex flex-col items-center justify-center scroll-mt-24" ref={ref}>
        <h3 className="mb-5 sm:mb-8 md:mb-10">Menu</h3>
        <HeadingDivider />
        <Image
            src={BPBmenu}
            alt="Black Palm Bakery Menu"
            width={1200}
            height={1800}
            className="w-[90%] h-auto max-w-3xl mx-auto my-10 sm:my-14 md:my-18"
        >

        </Image>
    </section>
  )
}
