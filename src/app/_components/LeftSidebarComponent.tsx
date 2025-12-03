"use client"
import React from 'react'
import { useState } from 'react'
import { useClickOutside } from '@/lib/useclickOutside'
import { useRef } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import NavigationContent from './NavigationContent'
import { GiHamburgerMenu } from 'react-icons/gi'
const animvariants = {
    open: {
        height: "100dvh",
        width: "50%",
        top: 0,
        left: "0%",
        transition: { duration: 0.75, ease: [0, 0.55, 0.45, 1] }
    },
    close: {
        height: "100vh",
        width: "50%",
        top:0,
        left:"-100%",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    }
}
export default function LeftSidebarComponent() {
    const [sidebarOpen, setsidebarOpen] = useState(false)
    const ref = useRef(null)
    useClickOutside(() => setsidebarOpen(false), ref)
    return (
        <div
            ref={ref}
            className='absolute top-2 left-8   bg-black lg:hidden flex'>
            <motion.div
                variants={animvariants}
                initial="close"
                animate={sidebarOpen ? "open" : "close"}
                className='fixed top-0 left-0 z-30 w-[40%] overflow-y-auto   bg-slate-800 '>
                    <AnimatePresence>
                    {sidebarOpen && <NavigationContent/>}
                    </AnimatePresence>
                   
            </motion.div>
            <button 
            onClick={()=>setsidebarOpen(!sidebarOpen)}
            className='h-[40px] z-20 flex justify-center items-center  w-[120px] absolute top-1 left-1  text-[#fff] bg-gray-800 border border-gray-300 '>
                <GiHamburgerMenu/>
            </button>
        </div>
    )
}
