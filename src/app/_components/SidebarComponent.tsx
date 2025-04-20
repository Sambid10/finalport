"use client"
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Button from './Button'
import { useClickOutside } from '@/lib/useclickOutside'
import NavComponent from './NavComponent'
const animvariants = {
  open: {
    height:"80vh",
    width: "80vw",
    top: "0.5rem",
    right: "1rem",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
  close: {
    height: 40,
    width: 120,
    top: "0.5rem",
    right: "1rem",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
}
export default function SidebarComponent() {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const ref = useRef(null)
  useClickOutside(() => setsidebarOpen(false), ref)

  return (
    <div
      ref={ref}
      className='absolute top-2 right-8 bg-black lg:hidden z-40'>
      <motion.div
        variants={animvariants}
        initial="close"
        animate={sidebarOpen ? "open" : "close"}
        className=' bg-slate-700 ' >
        <AnimatePresence>
          {sidebarOpen && <NavComponent />}
        </AnimatePresence>
      </motion.div>
      <Button
        contactstate={sidebarOpen}
        setContactstate={() => { setsidebarOpen(!sidebarOpen) }}
        maintitle={'Menu'}
        subtitle={'Close'}
      />
    </div>
  )
}
