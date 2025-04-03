import Image from "next/image";
import SectionDivider from "@/ui/section-divider";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
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

      {/* Card Section */}
      <div className="shadow-lg rounded-lg p-7 mt-10 text-center border border-gray-300">
        <div className="text-xl font-bold flex justify-center items-center gap-5">
          <span>Weddings</span> <span className="text-lg">◆</span>
          <span>Private Events</span> <span className="text-lg">◆</span>
          <span>Birthdays</span>
        </div>
        <p className="text-gray-700 font-semibold mt-4">
          Crafting custom pastries for your special day. Follow us on Instagram
          to see updates and recent work!
        </p>
        <a
          href="https://www.instagram.com/blackpalmbakery_/"
          target="_blank"
          className="mt-5 inline-flex items-center gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 transition">
          <FaInstagram />
          Instagram
        </a>
      </div>
    </>
  );
}
