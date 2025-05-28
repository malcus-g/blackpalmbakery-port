'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-4"
    >
            {children}
    </motion.h3>
  )
}