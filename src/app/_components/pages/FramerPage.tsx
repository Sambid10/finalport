import React from 'react'
import { ImageCarasoul } from '../ImageCarasoul'
import { ImagesData } from './XClonePage'
import AnimatedText from '../framermotionanim/Animatedtext'
import Footer from '../framermotionanim/HoverComponent'
import { Practice } from '../framermotionanim/MainRapperforHover'
import Links from '../framermotionanim/ContactComponent'
import MagneticPage from '../framermotionanim/MagneticPage'
export default function FramerPage() {
     
    return (
        <div className='border relative h-[calc(100dvh-80px)] w-full border-gray-200 px-8 py-4 overflow-y-scroll'>
            <div className='flex justify-center  w-full mb-4' >
                <img
                    className='h-32 w-32 '
                    src='framer.svg'
                />
            </div>

            <h1>
            Framer Motion is the powerhouse behind interactive animations on the web. It enables the creation of smooth transitions that enhance user experience. I've been working with Framer Motion for a considerable amount of time and have grown highly proficient in it. I've used it to animate web apps With Framer Motion.
            </h1>
            <div className='h-[4vh]' />
            <h1>Check out some of the animations.. 😉</h1>
            <div className='lg:px-4'>
           
            <div className='h-[2vh]' />
            <div className="border border-gray-600 px-4 py-4">
              <AnimatedText text={"HOVER ME !!!"}/>
             
            </div>
            <div className='h-[4vh]' />
            <div className="border border-gray-600 px-4 py-4">
              <Footer/>
            </div>
         
          
            <div className='h-[4vh]' />
            <div className="border border-gray-600 px-4 py-4">
                <Links/>
            </div>
            <div className='h-[4vh]' />
            <div className="border border-gray-600 px-4 py-4">
                <MagneticPage/>
            </div>
            <div className='h-[4vh]' />
            <div className="border border-gray-600 px-4 py-4">
                <Practice/>
            </div>
            </div>
         
        </div>
    )
}
