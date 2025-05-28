'use client';

import { motion } from 'framer-motion'

export default function HeadingDivider() {
  return (
    <motion.div 
    className="bg-black h-0.5 w-80 rounded-full hidden sm:block"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition= {{
        delay: .125
    }}
    >
    </motion.div>
  )
}