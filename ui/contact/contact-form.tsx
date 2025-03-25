'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SubmitBtn from '@/ui/contact/submit-btn';

export default function ContactForm() {
  return (
    <motion.form
        className="flex flex-col w-full sm:w-[38rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <div className="flex flex-col gap-10 mb-16">
          <p>
            After you fill out this form, I will contact you to go over details regarding your needs. Please allow 24 hours for response. 
          </p>
          <p>
            THIS FORM DOES NOT CONFIRM ANY ORDER(S).
          </p>
        </div>
        <input 
            type="email"
            name="senderEmail" 
            className="h-14 px-4 rounded-lg borderBlack transition-all bg-white" 
            placeholder="Your Email"
            required
            maxLength={500}
        />

        <textarea 
            placeholder="Your Message"
            name="message"
            required
            maxLength={5000}
            className="h-52 my-3 px-4 rounded-lg borderBlack p-4 transition-all bg-white" 
        />
        <SubmitBtn />
    </motion.form>
  )
}
