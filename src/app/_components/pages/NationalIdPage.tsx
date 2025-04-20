import React from 'react'
import { ImageCarasoul } from '../ImageCarasoul'
import { ImagesData } from './XClonePage'
import CardRapper from '../CardRapper'
export default function NationalIdPage() {
    const images:ImagesData[] = [{
        src: "/gov.png"
    },
    {
        src: "/gov2.png"
    },
    {
        src: "/gov3.png"
    },
    {
        src: "/gov4.png"
    },
    {
        src: "/gov5.png"
    },
    
    ] 
   
  return (
   
  
       <CardRapper>
        <span className='font-bold'> Built it in <span className='text-yellow-600'>@ </span> 2023</span>
            <div className='h-[1vh]' />
            <a
        href=" https://govfinal.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:bg-gray-900 py-2 px-12 bg-gray-800 border border-stone-600">
          <h1 className="text-red-200 text-xl">DEMO</h1>
        </button>
      </a>
            <div className='h-[2vh]' />

            <span>
                A National Id Registraion Portal  using 
                <span className="text-blue-500"> Next.js</span> to create a seamless and dynamic user experience.
                The platform leverages <span className="text-violet-600">Resend</span> for real-time email capabilities
                & also <span className="text-red-500"> Next-Auth</span> for security.
            </span>


            <div className='h-[2vh]' />
            <div className='flex justify-center items-center  border border-gray-700 '>
                <ImageCarasoul images={images} />
            </div>
            <div className='h-[2vh]' />
            <span className='flex'>
                For customizable UI, integrating component libraries like Shadcn UI, providing a consistent design system and a robust set of reusable components.
            </span>
          
       </CardRapper>
            
        
  )
}
