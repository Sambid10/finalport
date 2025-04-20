import React from 'react'
import { CodeBlock } from '../codeeditor/Codeeditor'
import { prismacode, ReactCode } from '@/lib/codes'
import CardRapper from '../CardRapper'
export default function ReactPage() {
    return (
      <CardRapper>
         <div className='flex justify-center  w-full mb-4' >
                <img
                    className='h-32 w-32 '
                    src='react.svg'
                />
            </div>
            <div className='h-[2vh]' />
            <span className="text-blue-500">React</span> is a <span className="text-green-500">JavaScript library</span> for building <span className="text-orange-500">user interfaces</span>. It simplifies <span className="text-purple-500">component-based development</span> and provides tools like <span className="text-teal-500">state management</span> and <span className="text-yellow-500">lifecycle hooks</span>.<br /> I’ve worked extensively with <span className="text-blue-500">React</span>, appreciating its <span className="text-red-500">flexibility</span> and features like <span className="text-indigo-500">JSX</span> and <span className="text-pink-500">virtual DOM</span>. It's excellent for creating <span className="text-cyan-500">dynamic</span> and <span className="text-lime-500">responsive</span> web applications.<br />

            <div className="h-[2vh]" /> <span> For me, <span className="text-blue-500">React</span> is invaluable for <span className="text-orange-500">building components</span>, ensuring <span className="text-green-500">reusability</span> and maintaining <span className="text-purple-500">clean architecture</span>. </span>
            <div className='h-[2vh]' />
            <div className="border border-gray-600 px-4 py-4">

                <CodeBlock
                    filename='counter.jsx'
                    language='jsx'
                    code={ReactCode}
                />
            </div>
      </CardRapper>
  
    )
}
