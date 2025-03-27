import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    customerType: string,
    senderName: string,
    senderPhone: string,
    senderEmail: string,
    contactMethod: string,
    message: string,
}

export default function ContactFormEmail(
    { customerType, senderName, senderPhone, senderEmail, contactMethod, message }: ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>New Inquiry for The Black Palm Bakery!</Preview>
        <Tailwind>
        <Body className="bg-gray-100 text-black">
            <Container>
                <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                    <Heading className="leading-tight">
                        Message Received:
                    </Heading>
                    <Text>{customerType === "new" ? "New Customer" : "Returning Customer"}</Text>
                    <Text>Name: {senderName}</Text>
                    <Text>Phone Number: {senderPhone}</Text>
                    <Text>Email: {senderEmail}</Text>
                    <Text>Preferred Contact Method: {contactMethod}</Text>
                    <Hr />
                    <Text>{message}</Text>
                </Section>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}