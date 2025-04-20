import React from 'react'
import { ImageCarasoul } from '../ImageCarasoul'
import { ImagesData } from './XClonePage'
import CardRapper from '../CardRapper'
export default function AIChatPage() {
      const images:ImagesData[] = [{
            src: "/pyt.png"
        },
        {
            src: "/pyt1.png"
        },
        {
            src: "/pyt3.png"
        },
        {
            src:"/pro2.png"
        }
       
        ] 
    return (
       <CardRapper>
         <span className='font-bold'> Built it in <span className='text-yellow-600'>@ </span>2024</span>
            <div className='h-[1vh]' />
            <a
        href=" https://github.com/Sambid10/python"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:bg-gray-900 py-2 px-12 bg-gray-800 border border-stone-600">
          <h1 className="text-red-200 text-xl">DEMO</h1>
        </button>
      </a>
            <div className='h-[2vh]' />
            <span>
                A Chatbot for a final project using machine learning tools in
                <span className="text-green-500"> Python</span> with a backend built using
                <span className="text-rose-200"> Flask</span> to power intelligent conversational responses.
                The project utilizes <span className="text-blue-500">Keras</span>,
                <span className="text-yellow-500"> NumPy</span>, and <span className="text-teal-500">pandas</span> for data processing and model training.
            </span>



            <div className='h-[2vh]' />
            <div className='flex justify-center items-center  border border-gray-700 '>
                <ImageCarasoul images={images}/>
            </div>
            <div className='h-[2vh]' />
            <span className='flex'>
               Additionally, we got a pretty good accuracy since our dataset was quite small. :)
            </span>
           
       </CardRapper>
           
        
    )
}
