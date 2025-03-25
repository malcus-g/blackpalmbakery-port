'use client';

import React from 'react';
import { motion } from 'framer-motion';

type PageHeadingProps = {
  children: React.ReactNode;
};

export default function PageHeading({ children }: PageHeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-4"
    >
            {children}
    </motion.h1>
  )
}