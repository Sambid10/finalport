import React from 'react'
import { CodeBlock } from '../codeeditor/Codeeditor'
import { jscode } from '@/lib/codes'
import CardRapper from '../CardRapper'
export default function JavaScript() {
    return (
        <CardRapper>
             <div className='flex justify-center  w-full mb-4' >
                <img
                    className='h-32 w-32 '
                    src='js.png'
                />
            </div>
            <div className='h-[2vh]' />


            <span className="text-blue-500">JavaScript</span> is the <span className="text-purple-500">cogs</span> of the world wide web. It is used to power the content of a website and make things <span className="text-green-500">interactive</span>.<br />
            I have been using <span className="text-blue-500">JavaScript</span> for nearly <span className="text-yellow-500">4 years</span> and I am very familiar with it. I have used it to build all kinds of solutions, from websites to mobile apps.<br />


            <div className='h-[2vh]' />
            <span>
                This is called <span className="text-teal-500">JavaScript fatigue</span>.
                I personally prefer to use the right tool for the right job and tend to use <span className="text-blue-500">JavaScript</span> when time is of the essence and I want to quickly iterate over a piece of software.
                It's excellent for <span className="text-yellow-500">prototyping</span> and <span className="text-green-500">rapid development</span>.
            </span>

            <div className='h-[2vh]' />
            <div className="border border-gray-600 px-4 py-4">

            <CodeBlock
            filename='useOutsideClick.jsx'
            language='jsx'
            code={jscode}
            />
            </div>
        </CardRapper>
       
           
   
    )
}

//I have been using JavaScript for nearly 10 years and I am very familiar with it. I have used it to build all kind of solutions, from websites to mobile apps, even desktop applications like video games.
