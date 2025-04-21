import React from "react";
import { ImageCarasoul } from "../ImageCarasoul";
import CardRapper from "../CardRapper";
import Link from "next/link";
export type ImagesData = {
  src: string;
};
export default function ResumeBuilderPage() {
  const images: ImagesData[] = [
    {
      src: "/res.png",
    },
    {
      src: "/res2.png",
    },
    {
      src: "/res1.png",
    },
  ];
  return (
    <CardRapper>
      <span className="font-bold">
        {" "}
        Built it in <span className="text-yellow-600">@ </span> 2025
      </span>
      <div className="h-[1vh]" />
      <a
        href="https://resumefinalone.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:bg-gray-900 py-2 px-12 bg-gray-800 border border-stone-600">
          <h1 className="text-red-200 text-xl">DEMO</h1>
        </button>
      </a>
      <div className="h-[2vh]" />
      <span>
        A powerful resume builder application using web technologies such as
        <span className="text-blue-500"> Next.js</span>,
        <span className="text-red-500"> Framer Motion</span>,
        <span className="text-green-500"> Zustand</span>, and
        <span className="text-purple-500"> Clerk</span> to create a smooth,
        intuitive, and highly responsive user experience. Zustand is leveraged
        for efficient state management, ensuring a seamless workflow, while
        Clerk enhances authentication and user management, making onboarding
        effortless.
      </span>
      <div className="h-[2vh]" />
      <div className="flex justify-center items-center  border border-gray-700 ">
        <ImageCarasoul images={images} />
      </div>
      <div className="h-[2vh]" />
      <span className="flex">
        For customizable UI, integrating component libraries like Shadcn UI,
        providing a consistent design system and a robust set of reusable
        components.
      </span>
    </CardRapper>
  );
}
