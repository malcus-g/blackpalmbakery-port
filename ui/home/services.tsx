import { FaInstagram } from "react-icons/fa";

export default function Services() {
  return (
    <div className="shadow-lg rounded-lg p-4 sm:p-7 w-[90%] max-w-[900px] text-center border border-gray-300">
      <div className="hidden sm:text-xl md:text-2xl lg:text-3xl font-extrabold sm:flex flex-wrap justify-center items-center gap-2 sm:gap-5">
        <span>Weddings</span> <span className="text-base sm:text-lg">◆</span>
        <span>Private Events</span> <span className="text-base sm:text-lg">◆</span>
        <span>Birthdays</span>
      </div>
      <p className="mt-6 sm:mt-10 mb-6 sm:mb-10">
        Crafting custom pastries for your special day. Follow us on Instagram
        to see updates and recent work!
      </p>
      <a
        href="https://www.instagram.com/blackpalmbakery_/"
        target="_blank"
        className="mt-3 sm:mt-5 inline-flex items-center gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 transition text-base sm:text-lg"
        rel="noopener noreferrer"
      >
        <FaInstagram />
        Instagram
      </a>
    </div>
  )
}
