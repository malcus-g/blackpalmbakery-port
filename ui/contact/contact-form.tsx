'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SubmitBtn from '@/ui/submit-btn';
import toast from 'react-hot-toast';
import { sendEmail } from '@/actions/sendEmail';

export default function ContactForm() {
  return (
    <motion.form
        className="flex flex-col w-full gap-10 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if(error) {
              toast.error(error);
              return;
          }
          toast.success("Email successfully sent!");
      }}
    >
        <div className="flex flex-col gap-10 mb-10">
          <p>
            After you fill out this form, I will contact you to go over details regarding your needs. Please allow 24 hours for response. 
          </p>
          <p>
            THIS FORM DOES NOT CONFIRM ANY ORDER(S).
          </p>
        </div>
        <fieldset className="flex gap-12">
          <legend className="mb-8">Are you a new or existing customer?</legend>
          <div className="flex flex-row gap-4">
            <input
                type="radio"
                name="customerType"
                value="new"
                required
                className="h-6 w-6"
            />
            <label htmlFor="new">I am a new customer</label>
          </div>
          <div className="flex flex-row gap-4">
            <input
                type="radio"
                name="customerType"
                value="existing"
                required
                className="h-6 w-6"
            />
            <label htmlFor="existing">I am an existing customer</label>
          </div>
        </fieldset>
        <div className="flex flex-col gap-4 text-left">
          <label htmlFor="senderName">First & Last Name:</label>
          <input
              type="text"
              name="senderName"
              placeholder="Your Name"
              required
              maxLength={100}
              className="h-14 px-4 rounded-lg borderBlack transition-all bg-white"
          />
        </div>
        <div className="flex flex-col gap-4 text-left">
          <label htmlFor="senderPhone">Phone Number:</label>
          <input
              type="tel"
              name="senderPhone"
              placeholder="123-456-7890"
              required
              maxLength={15}
              className="h-14 px-4 rounded-lg borderBlack transition-all bg-white"
          />
        </div>
        <div className="flex flex-col gap-4 text-left">
          <label htmlFor="senderEmail">Email:</label>
          <input 
              type="email"
              name="senderEmail" 
              className="h-14 px-4 rounded-lg borderBlack transition-all bg-white" 
              placeholder="Your Email"
              required
              maxLength={500}
          />
        </div>
        <fieldset className="flex gap-10">
          <legend className="mb-6">Preferred contact method:</legend>
          <div className="flex flex-row gap-4">
            <input
                type="radio"
                name="contactMethod"
                value="phone"
                required
                className="h-6 w-6"
            />
            <label htmlFor="new">Phone</label>
          </div>
          <div className="flex flex-row gap-4">
            <input
                type="radio"
                name="contactMethod"
                value="email"
                required
                className="h-6 w-6"
            />
            <label htmlFor="new">Email</label>
          </div>
        </fieldset>
        <div className="flex flex-col gap-4 text-left">
          <label htmlFor="message">Questions or Comments:</label>
          <textarea 
              placeholder="Please provide details about your request..."
              name="message"
              required
              maxLength={5000}
              className="h-52 rounded-lg borderBlack p-4 transition-all bg-white" 
          />
        </div>
        <SubmitBtn />
    </motion.form>
  )
}
