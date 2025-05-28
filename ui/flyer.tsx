import alohaLouFlyer from '@/public/images/AlohaLouFlyer.jpg';
import Image from 'next/image';
import HeadingDivider from './layout/heading-divider';

export default function Flyer() {
  return (
    <section className="flex flex-col items-center justify-center">
        <h3 className="mb-8">Come see us!</h3>
        <HeadingDivider />
        <Image
          src={alohaLouFlyer}
          alt="Aloha Lou Flyer"
          width={1200}
          height={1800}
          className="w-full h-auto max-w-3xl mx-auto my-10"
        />
    </section>
  )
}
