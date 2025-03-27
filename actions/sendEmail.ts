'use server';

import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const customerType = formData.get("customerType");
    const senderName = formData.get("senderName");
    const senderEmail = formData.get("senderEmail");
    const senderPhone = formData.get("senderPhone");
    const contactMethod = formData.get("contactMethod");
    const message = formData.get("message");

    if(!validateString(customerType, 10)) {
        return {
            error: "Invalid customer type"
        };
    };
    if(!validateString(senderName, 100)) {
        return {
            error: "Invalid name"
        };
    };
    if(!validateString(senderPhone, 15)) {
        return {
            error: "Invalid phone number"
        };
    };
    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid email"
        };
    };
    if(!validateString(contactMethod, 10)) {
        return {
            error: "Invalid contact method"
        };
    };
    if(!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        };
    };

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "blackpalmbakery@gmail.com",
            subject: "Message from Contact Form",
            replyTo: senderEmail as string,
            text: message as string,
            react: React.createElement(ContactFormEmail, {
                customerType: customerType as string,
                senderName: senderName as string,
                senderPhone: senderPhone as string,
                senderEmail: senderEmail as string,
                contactMethod: contactMethod as string,
                message: message as string,
            })
        });
    } catch(error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }
    return {
        data
    };
};