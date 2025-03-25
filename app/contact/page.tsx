import PageHeading from '@/ui/page-heading';
import PageSubHeading from '@/ui/page-subheading';
import SectionDivider from '@/ui/section-divider';
import ContactForm from '@/ui/contact/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact"
}

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center mb-20 sm:mb-28 w-full text-center">
      <PageSubHeading>Questions?</PageSubHeading>
      <PageHeading>Connect with us!</PageHeading>
      <SectionDivider/>
      <ContactForm/>
    </section>
  )
}
