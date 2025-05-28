'use client';

import BPBmenu from '@/public/images/BPBmenu.png';
import Image  from 'next/image';
import { useSectionInView } from '@/lib/hooks';

export default function Menu() {
  const { ref } = useSectionInView("Menu", .25);

  return (
    <section id="menu" className="scroll-mt-16" ref={ref}>
        <Image
            src={BPBmenu}
            alt="Black Palm Bakery Menu"
            width={1200}
            height={1800}
            className="w-full h-auto max-w-3xl mx-auto my-8"
        >

        </Image>
    </section>
  )
}
