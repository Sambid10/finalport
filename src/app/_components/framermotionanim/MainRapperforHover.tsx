"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
export  const projects=[{
    title:"Kang Haerin",
    desc:"- from Newjeans",
    img:"kang.webp",
     
 
},
{
    title:"Hanni Pham",
    desc:"- from Newjeans",
    img:"hanni.jpg",
     
 
},
{
    title:"Hyein",
    desc:"-from Newjeans",
    img:"heyin.jpg",
  
  
},
{
    title:"Minji",
    desc:"-from Newjeans",
    img:"minji.jpg",
    
     
},
{
    title:"Dannielle",
    desc:"-from Newjeans",
    img:"dani.jpg",
     
    
}
]
import { useState,useRef } from 'react'
import { PictureContainers } from './PictureContainers'
export const Practice=()=> {
    const [isHovered,sethover]=useState({active:false,index:0})
    
  return (
    <div 
   id='projects'
    className='min-h-screen  quick relative flex flex-col justify-center items-center   z-[2] '>
        
        {projects.map((pro,i)=>{
            return(
                
                      <Container  key={i} title={pro.title} sethover={sethover} index={i} desc={pro.desc}/>    
            )
        }
        )}
        <PictureContainers ishovered={isHovered} project={projects}/>
    
    </div>
  )
}

export const Container=({title,sethover,index,desc}:{
    title:string,
    desc:string,
    sethover:any,
    index:number
})=>{
    
    return(
        <div 
        onMouseEnter={()=>{sethover({active:true,index:index})}}
        onMouseLeave={()=>{sethover({active:false,index:index})}}
        className='flex quick w-full px-4 lg:px-12 justify-between  gap-12 items-center border-t border-stone-700 py-8 hover:bg-gray-800  group transition-all ease-in duration-200 text-[#FCFCFC]'>
            <div className='text-[1.65rem] lg:text-[2rem] font-semibold group-hover:translate-x-2 group-hover:bg-[#FFFFF] transition-all ease-in duration-200'>
            {title}
            </div>
            <div className='text-sm lg:text-md text-[#FCFCFC] group-hover:-translate-x-2 group-hover:text-[#FFFFFF] transition-all ease-in duration-200'>
               {desc}
            </div>
        </div>
    )
}

