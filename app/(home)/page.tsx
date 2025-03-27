import Image from "next/image";
import SectionDivider from "@/ui/section-divider";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
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
  );
}
