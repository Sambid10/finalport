"use client"
import React from 'react'
import Homepage from './Homepage'
import { Skills } from '@/lib/Skills'
import { Pages } from '@/lib/zustand'
import { useStore } from '@/lib/zustand'
import {motion} from "framer-motion"
const perspective={
    initial:{
        opacity:1,
      
    },
    open:(i:number)=>(
    {
        opacity:1,
      
    }),
    exit:{opacity:0}
}
export default function NavigationContent() {
    const {pages,setPages}=useStore()
  return (
    <motion.div 
   
    variants={perspective}
    initial={"initial"}
    exit={"exit"}
    animate={"open"}
    className='px-2 py-6'>
        <div className="flex flex-col gap-10">
                            {/* Home Section */}
                            <div
                                onClick={() => setPages("Personal")}
                                className={`h-fit cursor-pointer px-2 relative z-0 ${pages === "Personal" ? "border border-red-400" : "border border-gray-200"
                                    }`}
                            >
                                <h1 className="absolute -top-3 z-40 bg-slate-800 px-2">Home</h1>
                                
                                <h1 className="pt-2">
                                    Hello! I'm Sambid Shakya, a passionate frontend developer from Nepal :)
                                </h1>
                            </div>
        
                            {/* Projects Section */}
                            <div
                                className={`h-fit px-2 py-2 relative z-0 ${["XClonePage", "AIChatbot", "NationalId"].includes(pages)
                                    ? "border border-red-400"
                                    : "border border-gray-200"
                                    }`}
                            >
                                <h1 className="absolute -top-3 z-40 bg-slate-800 px-2">Projects</h1>
                                <div className="absolute -top-7 right-0 z-40 pointer-events-none">
                                <img
                                    src='elcapo.webp'
                                    className='h-7 w-7'
                                />
                                </div>
                              
                              
                                <div className="h-2" />
                                {[
                                    { name: "XClonePage", label: "X (Twitter) Clone" },
                                    { name: "Chatbot", label: "Chatbot" },
                                    { name: "NationalId", label: "National Id Registration Portal" },
                                ].map((project) => (
                                    <div
                                        key={project.name}
                                        onClick={() => setPages(project.name as Pages)}
                                        className={`w-full hover:bg-[#121212] -pl-2 -pr-2 ${pages === project.name ? "bg-gray-950" : "bg-none"
                                            }`}
                                    >
                                        <ul className="px-4">
                                            <li className="list-disc">{project.label}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
        
                            {/* Skills Section */}
                            <div
                                className={`h-fit cursor-pointer px-2 relative z-0 pb-2 ${[
                                    "HTML",
                                    "CSS / Tailwind CSS",
                                    "JavaScript",
                                    "TypeScript",
                                    "React",
                                    "Next.Js",
                                    "Prisma",
                                    "Framer Motion",
                                ].includes(pages)
                                    ? "border border-red-400"
                                    : "border border-gray-200"
                                    }`}
                            >
        
                                <h1 className="absolute -top-3 z-40 bg-slate-800 px-2">Skills</h1>
                                <div className="absolute -top-11 right-0 z-40 pointer-events-none">
                                <img
                                    src='cute.webp'
                                    className='h-12 w-24'
                                />
                                </div>
                              
                                <div className="h-4" />
                                {Skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setPages(skill.name as Pages)}
                                        className={`w-full cursor-default hover:bg-[#121212] -pl-2 -pr-2 ${pages === skill.name ? "bg-gray-950" : "bg-none"
                                            }`}
                                    >
                                        <ul className="px-4">
                                            <li className="list-disc">
                                                <div className="flex items-center gap-1 h-full">
                                                    {skill.name}
                                                    {skill.icon && <skill.icon />}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
    </motion.div>
  )
}
