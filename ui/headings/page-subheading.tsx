'use client';

import React from 'react';
import { motion } from 'framer-motion';

type PageSubHeadingProps = {
  children: React.ReactNode;
};

export default function PageSubHeading({ children }: PageSubHeadingProps) {
  return (
    <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-4"
    >
            {children}
    </motion.h2>
  )
}