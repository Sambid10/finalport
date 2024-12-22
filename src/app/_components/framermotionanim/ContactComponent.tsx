"use client"
import React, { useState } from 'react'
import {color, easeIn, motion} from "framer-motion"
import { FaFacebook ,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa6'

const contactLinks=[{
    name:"Facebook",
    icon:<FaFacebook
    style={{color:"#4267B2",
    }}
    />,
 
   
},
{
    name:"Instagram",
   
    icon:<FaInstagram
    style={{color:"#E1306C",

    }}
    />,
    
},
{
    name:"LinkedIn",
    
    icon:<FaLinkedin
    style={{
        color: "#0077B5", // Icon color
      }}
    />,
    
    
},
{
    name:"Twitter",
    href:"/",
    icon:<FaTwitter
    style={{color:"#1DA1F2"}}
    />,
}
]
export default function Links() {
    const [isHovered,setHovered]=useState({
        hovered:false,
        name:""
    })

    const split=(name:string)=>{
        const half=Math.ceil(name.length/2)
        return [name.slice(0,half),name.slice(half)]
    }
  return (
    <motion.div 
    
    initial={{opacity:0}}
    animate={{opacity:1,transition:{delay:0.5,ease:easeIn}}}
    exit={{opacity:0}}
    
    className='text-5xl md:text-6xl lg:text-7xl text-gray-200 px-4 py-8 flex flex-col gap-4 uppercase relative overflow-hidden h-full w-full  items-center justify-center'>
     
        {contactLinks.map((link,i)=>{
            const[firsthalf,secondhalf]=split(link.name)
           
            return(
              
                <div
                onMouseEnter={()=>{setHovered({
                    hovered:true,
                    name:link.name
                })}}
                onMouseLeave={()=>{setHovered({
                    hovered:false,
                    name:""
                })}}
                key={i}  className='h-full w-full flex justify-center items-center hover:bg-gray-800 border-b border-stone-700  transition-colors ease-in duration-200 '>
                   
                    {firsthalf}
                    <motion.h1
                    
                    className={`flex h-full justify-center items-center `}
                    animate={{width: link.name  === isHovered.name ? "5rem" : "0rem",opacity:link.name === isHovered.name  ? "100%" : "0%"}}
                    transition={{ease:"backOut",duration:0.8}}
                    >{link.icon}</motion.h1>
                    {secondhalf}
                    
                 
            </div>
            )
            }
        )}    
      
    </motion.div>
  )
}