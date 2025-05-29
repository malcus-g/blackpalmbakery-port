'use client';

import PageHeading from '@/ui/headings/page-heading';
import PageSubHeading from '@/ui/headings/page-subheading';
import SectionDivider from '@/ui/layout/section-divider';
import ContactForm from '@/ui/contact/contact-form';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact", .25);

    return (
        <section 
            ref={ref}
            className="flex flex-col justify-center items-center w-[95%] max-w-[900px] text-center scroll-mt-28"
            id="contact"
        >
            <PageSubHeading>Questions?</PageSubHeading>
            <PageHeading>Let&apos;s Connect!</PageHeading>
            <SectionDivider/>
            <ContactForm/>
        </section>
    );
}