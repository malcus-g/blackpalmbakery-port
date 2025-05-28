import { FaInstagram } from "react-icons/fa";

export default function Services() {
  return (
    <div className="shadow-lg rounded-lg p-7 text-center border border-gray-300">
      <div className="text-xl md:text-4xl font-bold flex justify-center items-center gap-5">
        <span>Weddings</span> <span className="text-lg">◆</span>
        <span>Private Events</span> <span className="text-lg">◆</span>
        <span>Birthdays</span>
      </div>
      <p className="font-semibold mt-10 mb-10">
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
  )
}
