'use client';

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div 
    className="bg-gray-300 my-5 sm:my-8 h-1 w-75 sm:w-100 md:w-150 rounded-full block justify-center"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition= {{
        delay: .125
    }}
    >
    </motion.div>
  )
}