import React from 'react'
import { ImageCarasoul } from '../ImageCarasoul'
import CardRapper from '../CardRapper'

export type ImagesData = {
    src: string
}

export default function YoutubeClone() {
    const images: ImagesData[] = [
        { src: "/yt1.png" },
        { src: "/yt2.png" },
        { src: "/yt2(1).png" },
        { src: "/yt3.png" },
        { src: "/yt4.png" },
        { src: "/crop.png" },
        { src: "/yt5.png" },
        { src: "/yt6.png" },
        { src: "/yt7.png" },
        { src: "/yt8.png" },
        { src: "/yt9.png" },
        { src: "/yt10.png" }
    ]

    return (
        <CardRapper>
            <span className='font-bold text-lg md:text-xl'>
                Built in <span className='text-yellow-600'>@ 2025</span>
            </span>
            <div className='h-[1vh]' />

            <a
                href="https://youtube-clone-chi-lilac.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="hover:bg-gray-900 py-2 px-12 bg-gray-800 border border-stone-600">
                    <h1 className="text-red-200 text-lg md:text-xl">DEMO</h1>
                </button>
            </a>
            <div className='h-[2vh]' />

            <span className='text-lg md:text-xl'>
                A YouTube-style clone built with <span className="text-blue-500">Next.js</span> and <span className="text-orange-500">TRPC</span> for API communication.
                <span className="text-violet-600"> Clerk</span> handles authentication, <span className="text-green-500">UploadThing</span> manages video & thumbnail uploads, and <span className="text-orange-500">Mux</span> provides video processing and adaptive streaming.
            </span>

            <div className='h-[2vh]' />
            <div className='flex justify-center items-center border border-gray-700'>
                <ImageCarasoul images={images} />
            </div>
            <div className='h-[2vh]' />

            <span className='flex text-lg md:text-xl'>
               <h1> For UI consistency, the project leverages Shadcn UI, providing reusable components and a cohesive design system.</h1>
            </span>
        </CardRapper>
    )
}
