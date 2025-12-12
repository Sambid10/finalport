import React from 'react'

export default function CardRapper({children}:{
    children:React.ReactNode
}) {
  return (
    <div className='border relative h-[calc(100dvh-80px)] w-full border-gray-200 px-4 lg:px-8 py-8 lg:py-4 overflow-y-scroll'>
    <div className="absolute -top-0 right-0 text-lg md:text-xl z-40 pointer-events-none lg:block hidden">
              </div>
        {children}
    </div>
  )
}
