'use client';

import React from 'react';
import { navLinks } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { clsx } from 'clsx';
import Image from 'next/image';
import headerLogo from '@/public/images/logo.png';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className="relative z-[999]">
            <motion.div 
                className="fixed top-0 h-[4.5rem] left-1/2 w-full rounded-none border border-white border-opacity-40 bg-white/90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
                initial={{ opacity: 0, x: "-50%", y: -100 }}
                animate={{ opacity: 1, x: "-50%", y: 0 }}
            >
                <Link 
                    href="/" 
                    className="hidden sm:block w-fit"
                    onClick={() => {
                        setActiveSection("Home");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    <Image 
                        src={headerLogo}
                        alt="Logo Image"
                        width="75"
                        height="75"
                        quality="95"
                        priority={true}
                    />
                </Link>
            </motion.div>
            <nav 
                className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-[48%] py-2 sm:top-[.75rem] sm:h-[initial] sm:py-0">
                <ul 
                    className="flex flex-wrap w-[18rem] items-center justify-center gap-y-1 font-bold text-gray-600 text-[.9rem] sm:text-[1.1rem] sm:w-[initial] sm:gap-8 sm:flex-nowrap">
                    {
                        navLinks.map((link) => (
                            <motion.li 
                                className="relative h-3/4 flex items-center justify-center" 
                                key={link.path}
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Link
                                    className={clsx("flex w-full items-center justify-center px-4 py-3 hover:text-gray-950 transition",
                                        {
                                            "text-slate-950": activeSection === link.name
                                        }
                                    )}
                                    href={link.path}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {link.name}
                                    {activeSection == link.name && (
                                        <motion.span 
                                        className="bg-stone-200 absolute inset-0 rounded-full -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}></motion.span>
                                    )}
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
