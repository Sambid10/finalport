import React from 'react'
import RandomQuote from '../Quote/RandomQuote'
import { Quote } from 'lucide-react'
export default function PersonalPage() {
    return (
        <div className='border h-[calc(100dvh-80px)] w-full border-gray-200 px-8 py-4 overflow-y-auto'>
            <video
                className='h-[15rem] w-full object-cover opacity-85'
                preload='none'
                src='a.mp4'
                autoPlay
                loop
                muted
            />
            <div className='h-[2vh]' />
            <span className='flex items-center'>
                Hi I'm<span className='ml-2 text-red-200'>Sambid Shakya 🐱</span>.
            </span>
            <span>A <span className='ml-1 text-blue-200'> junior frontend developer</span> and a student.</span>
            <div className='h-[2vh]' />
            <span>I enjoy programming frontend technologies like <span className=' text-blue-400'> React </span>and <span className='text-blue-400'>Next.js,</span> using TypeScript to build dynamic user interfaces.</span>
            <div className='h-[2vh]' />
            <span>
                I'm a passionate developer, always looking for new challenges and opportunities to learn.
            </span>
            <div className='h-[2vh]' />
            <span>
                Nowadays, you can find me on <span className="text-blue-500">Facebook</span>.
                <br />
                Also, on <span className="text-pink-500">Instagram</span>.
                <br />
                If you like cringe-inducing experiences, feel free to connect on <span className="text-blue-700">LinkedIn</span>.
                <br />
                You can always check out my work on <span className="text-green-200">GitHub</span>.
            </span>
            <div className='h-[4vh]' />
            <img
            src='border.gif'
           className='w-full h-fit object-fit'

            />
            <div className='h-[4vh]' />
            <div className="border-sky-500 rounded-none border px-4 py-2 h-fit relative z-0">
                <RandomQuote/>
            </div>
            
        </div>

    )
}
