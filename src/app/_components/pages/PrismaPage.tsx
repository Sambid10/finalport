import React from 'react'
import { CodeBlock } from '../codeeditor/Codeeditor'
import { jscode, prismacode, tscode } from '@/lib/codes'
import CardRapper from '../CardRapper'
export default function PrismaPage() {
    return (
        <CardRapper>
            <div className='flex justify-center  w-full mb-4' >
                <img
                    className='h-32 w-32 '
                    src='prisa.png'
                />
            </div>
            <div className='h-[2vh]' />


            <span className="text-red-500">Prisma</span> is a <span className="text-yellow-500">ORM</span> that simplifies database workflows and provides a type-safe way to interact with databases.<br />
            I’ve used <span className="text-red-500">Prisma</span> in several projects, appreciating its <span className="text-orange-500">developer-friendly</span> syntax and features like <span className="text-green-500">data modeling</span> and <span className="text-purple-500">migration tools</span>. It’s great for building <span className="text-blue-500">efficient</span> and <span className="text-teal-500">scalable</span> backends.<br />

            <div className='h-[2vh]' /> <span> For me, <span className="text-red-500">Prisma</span> is invaluable when working with <span className="text-yellow-500">relational databases</span>, providing a <span className="text-orange-500">streamlined experience</span> while maintaining <span className="text-green-500">type safety</span> and <span className="text-blue-500">consistency</span>. </span>
            <div className='h-[2vh]' />
            <div className="border border-gray-600 px-4 py-4">

                <CodeBlock
                    filename='action.ts'
                    language='ts'
                    code={prismacode}
                />
            </div>
        </CardRapper>
    )
}

