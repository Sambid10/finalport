export const csscode = `
<div class="flex gap-2 py-6">
  <div class="w-[35%]">
    <div class="flex flex-col gap-6">
      <!-- Home Section -->
      <div 
        onclick="setPages('Personal')" 
        class="h-fit cursor-pointer px-2 relative z-0 
        \${pages === 'Personal' ? 'border border-red-400' : 'border border-gray-200'}"
      >
        <h1 class="absolute -top-3 z-40 bg-[#0d1117] px-2">Home</h1>
        <h1 class="pt-2">
          Hello! I'm Sambid Shakya, a passionate frontend developer from Nepal :)
        </h1>
      </div>
    </div>
  </div>
</div>`;


export const jscode=`import { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event); // Call the handler if clicked outside
    };

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};`

export const tscode=`import React, { useEffect } from "react"

interface Props{
    handler:(event:MouseEvent | TouchEvent)=>void,
    ref:React.RefObject<HTMLDivElement>
}
export const useClickOutside=({handler,ref}:Props)=>{
    useEffect(()=>{
        const listener=(event:MouseEvent | TouchEvent)=>{
            if(!ref.current || ref.current.contains(event.target as  Node)){
                return
            }
            handler(event)
        }
        window.addEventListener("mousedown",listener)
        window.addEventListener("touchmove",listener)

        return(()=>{
            window.removeEventListener("mousedown",listener)
            window.removeEventListener("touchmove",listener)
    
        })
    },[handler,ref])
}`

export const prismacode=`export const UpdateDisplayName = 
async (values: z.infer<typeof displayNameSchema>) => {
    console.log(values)
    const user = await auth()
    if (!user?.user.id) throw new Error("Unauthorized")
    const {displayname} = displayNameSchema.parse(values)
    const existingdisplayname = await db.user.findFirst({
       where:{
        displayname:displayname
       }
    })
    if(existingdisplayname) return {error:"Name already in use."}
    await db.user.update({
        where: {
            id: user.user.id
        },
        data: {
            displayname:displayname,   
        }
    })
    revalidatePath("/home")
}`

export const ReactCode=`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl">Counter: {count}</h1>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg ml-4"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
`

export const NextCode=`
import { db } from "@/lib/db";

import getSession from "@/lib/getSession";
interface Props{
    params:{username:string}
}
export async function GET(req: Request,{params}:Props) {
    const {username}=await params
    try {
        const session = await getSession()
        console.log(username)
        if (!session?.user.id) return Response.json({ error: "Unauthorized" }
        , { status: 401 })
        const searchinput = username.split(" ").join(" & ")
        const searchedusers = await db.user.findMany({
            where: {
                OR: [
                    {
                        name: {
                            search: searchinput,

                            mode: "insensitive"
                        },
                    },
                    {
                        displayname: {
                            search: searchinput,

                            mode: "insensitive"
                        },
                    },
                    {
                        name: {

                            contains: searchinput,
                            mode: "insensitive"
                        },
                    },
                    {
                        displayname: {

                            contains: searchinput,
                            mode: "insensitive"
                        },
                    },
                ],
            },
            select:getUserDataSelect(session.user.id)
        });
        const data:UserInputPage={
            users:searchedusers
        }
        return Response.json(data)
    } catch (err) {
        console.log(err)
        return Response.json({ error: "Server Error" }, { status: 501 })
    }
}`