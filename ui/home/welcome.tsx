'use client';

import Image from "next/image";
import SectionDivider from "@/ui/layout/section-divider";
import { useSectionInView } from '@/lib/hooks';

export default function Welcome() {
  const { ref } = useSectionInView("Home", 0.25);

  return (
    <>
      <div className="flex flex-col items-center text-center scroll-mt-28" id="home" ref={ref}>
        {/* Logo Section */}
        <Image
          src="/images/logo.png"
          alt="Home Logo"
          width={225}
          height={200}
          priority
        />

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
