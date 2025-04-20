import React from 'react'
import { CodeBlock } from '../codeeditor/Codeeditor'
import { jscode, tscode } from '@/lib/codes'
import CardRapper from '../CardRapper'
export default function TypeScript() {
    return (
        <CardRapper>
                <div className='flex justify-center  w-full mb-4' >
                <img
                    className='h-32 w-32 '
                    src='ts.png'
                />
            </div>
            <div className='h-[2vh]' />


            <span  className="text-blue-500 text-lg md:text-xl">TypeScript</span> is a <span className="text-purple-500">typed superset</span> of JavaScript that brings static typing to the language. It helps catch errors early and makes code easier to maintain.<br />
            I’ve been using <span className="text-blue-500">TypeScript</span> in many projects, appreciating its type safety and features like <span className="text-green-500">interfaces</span> and <span className="text-teal-500">generics</span>. It’s perfect for creating <span className="text-yellow-500">scalable</span> and <span className="text-orange-500">reliable</span> applications.<br />

            <div className='h-[2vh]' /> <span> For me, <span className="text-blue-500">TypeScript</span> is essential when working on <span className="text-purple-500">complex projects</span> or collaborating in teams, ensuring better code quality and fewer bugs. </span>
            <div className='h-[2vh]' />
            <div className="border border-gray-600 px-4 py-4">

                <CodeBlock
                    filename='useOutsideClick.tsx'
                    language='tsx'
                    code={tscode}
                />
            </div>
        </CardRapper>
        
       
    )
}

