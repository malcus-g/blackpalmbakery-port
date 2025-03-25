'use client';

import PageHeading from '@/ui/page-heading';
import PageSubHeading from '@/ui/page-subheading';
import SectionDivider from '@/ui/section-divider';
import ContactForm from '@/ui/contact/contact-form';
import { useSectionInView } from '@/lib/hooks';

export default function ContactClient() {
    const { ref } = useSectionInView("Contact", .1);

    return (
        <section 
            ref={ref}
            className="flex flex-col justify-center items-center mb-20 sm:mb-28 w-full text-center"
        >
            <PageSubHeading>Questions?</PageSubHeading>
            <PageHeading>Connect with us!</PageHeading>
            <SectionDivider/>
            <ContactForm/>
        </section>
    );
}