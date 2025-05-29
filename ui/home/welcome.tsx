'use client';

import Image from "next/image";
import SectionDivider from "@/ui/layout/section-divider";
import { useSectionInView } from '@/lib/hooks';

export default function Welcome() {
  const { ref } = useSectionInView("Home", 0.25);

  return (
    <>
      <div className="flex flex-col items-center text-center scroll-mt-28 px-4" id="home" ref={ref}>
        {/* Logo Section */}
        <div className="w-32 h-28 sm:w-[225px] sm:h-[200px] relative">
          <Image
            src="/images/logo.png"
            alt="Home Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="mt-8">
          <h1 className="">e komo mai</h1>
          <SectionDivider />
          <h2 className="mt-3">Welcome!</h2>
        </div>
      </div>
    </>
  )
}
