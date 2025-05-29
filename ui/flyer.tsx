import alohaLouFlyer from '@/public/images/AlohaLouFlyer.jpg';
import Image from 'next/image';
import HeadingDivider from './layout/heading-divider';

export default function Flyer() {
  return (
    <section className="flex flex-col items-center justify-center">
        <h3 className="mb-5 sm:mb-8 md:mb-10">Come see us!</h3>
        <HeadingDivider />
        <Image
          src={alohaLouFlyer}
          alt="Aloha Lou Flyer"
          width={1200}
          height={1800}
          className="w-[90%] h-auto max-w-3xl mx-auto my-10 sm:my-14 md:my-18"
        />
    </section>
  )
}
