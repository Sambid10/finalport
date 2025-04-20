import React from 'react'

export default function CardRapper({children}:{
    children:React.ReactNode
}) {
  return (
    <div className='border relative h-[calc(100dvh-80px)] w-full border-gray-200 px-4 lg:px-8 py-8 lg:py-4 overflow-y-scroll'>
    <div className="absolute -top-0 right-0 z-40 pointer-events-none lg:block hidden">
              <img
                  src='cat.webp'
                  className='h-24 w-32'
              />
              </div>
        {children}
    </div>
  )
}
