import React from 'react'
import { ImageCarasoul } from '../ImageCarasoul'
import CardRapper from '../CardRapper'
export type ImagesData = {
    src: string
}
export default function XClonePage() {
    const images:ImagesData[] = [{
        src: "/x.png"
    },
    {
        src: "/x1.png"
    },
    {
        src: "/x2.png"
    },
    {
        src: "/x3.png" 
    }, {
        src: "/x4.png"
    },
    {
        src: "/x5.png"
    }
    ] 
    return (
        <CardRapper>
            <span className='font-bold'> Built it in <span className='text-yellow-600'>@ </span> 2024</span>
            <div className='h-[1vh]' />
            <button className='hover:bg-gray-900 py-2 px-12 bg-gray-800 border border-stone-600'>
                <h1 className='text-red-200 text-xl'>DEMO</h1>
            </button>
            <div className='h-[2vh]' />

            <span>
                A X clone using web technologies such as
                <span className="text-blue-500"> Next.js</span> and
                <span className="text-red-500"> ReactQuery</span> to create a seamless and dynamic user experience.
                The platform leverages <span className="text-violet-600">StreamChat</span> for real-time messaging capabilities.
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
