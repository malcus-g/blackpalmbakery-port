import type { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: "Contact"
}

export default function Contact() {
  return (
    <ContactClient />
  )
}
