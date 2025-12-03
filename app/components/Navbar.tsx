'use client';
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import UnderlinedLink from './UnderlinedLink';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
    const { scrollY } = useScroll();

    const width = useTransform(scrollY, [25, 200], ['100%', '70%'])
    const margin = useTransform(scrollY, [25, 200], ['0', 'auto']);
    const backgroundColor = useTransform(scrollY, [0, 200], ['rgba(255,255,255,0)', 'rgba(230, 230, 230, 0.2)']);
    const backdropFilter = useTransform(scrollY, [25, 200], ['blur(0px)', 'blur(15px)']);
    const opacity = useTransform(scrollY, [25, 200], [1, 1.0]);
    const color = useTransform(scrollY, [0, 25], ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 5%)']);
    return (
        <motion.nav
            style={{
                width: width,
                margin,
                backgroundColor,
                backdropFilter,
                opacity,
                color,
            }}
            className="p-3 m-2 rounded-lg flex items-center justify-between sticky top-0 left-0 z-50 w-full">
            <div className="flex items-center gap-20 text-sm">
                <RxHamburgerMenu size={'30px'} />
                <UnderlinedLink text="AE.1" color={color}/>
            </div>

            <div className="absolute left-[50%] transform -translate-x-1/2 text-xl font-light tracking-widest">
                Anur Peljto
            </div>

            <div className="flex items-center gap-10 text-sm">
                <UnderlinedLink text="Technology" color={color}/>
                <UnderlinedLink text="Make it Yours" color={color}/>
            </div>
        </motion.nav>
    )
}

export default Navbar