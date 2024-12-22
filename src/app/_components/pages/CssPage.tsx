import React from 'react'
import { ImagesData } from './XClonePage'
import { ImageCarasoul } from '../ImageCarasoul'
import { CodeBlock } from '../codeeditor/Codeeditor'
import { csscode } from '@/lib/codes'
import CardRapper from '../CardRapper'
export default function CssPage() {
  const images: ImagesData[] = [{
    src: "/pa.png"
  },
  {
    src: "/p2.png"
  },
  {
    src: "/p3.png"
  },
  ]

  return (
   <CardRapper>
     <div className='flex justify-center  w-full mb-4' >
        <img
          className='h-32 w-32 '
          src='css.svg'
        />
      </div>
      <div className='h-[2vh]' />
      <span>
        <span className="text-blue-500">CSS</span> is the paint of the World Wide Web, used to style and decorate website content.   I’ve been using <span className="text-purple-500">CSS</span> for as long as I’ve used HTML and love it for its creative potential.
      </span>
      <div className='h-[2vh]' />
      <span>
        I particularly enjoy working with <span className="text-teal-500">Tailwind CSS</span> for its utility, consistency, and developer-friendly approach, making modern web design faster and more enjoyable.
      </span>
      <div className='h-[4vh]' />
      <div className='flex justify-center items-center  border border-gray-700 '>
        <ImageCarasoul images={images} />
      </div>
      <div className='h-[4vh]' />
      <div className='flex justify-center items-center  border border-gray-700  px-4 py-4'>
        <CodeBlock
          code={csscode}
          filename='page.tsx'
          language='jsx'

        />

      </div>
   </CardRapper>
  )
}
