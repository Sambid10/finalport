import React from "react";
import { ImageCarasoul } from "../ImageCarasoul";
import CardRapper from "../CardRapper";
export type ImagesData = {
  src: string;
};
export default function PortfolioPage() {
  const images: ImagesData[] = [
    {
      src: "/port.png",
    },
    {
      src: "/port1.png",
    },
    {
      src: "/port2.png",
    },
    {
      src: "/port3.png",
    },
  ];
  return (
    <CardRapper>
      <span className="font-bold">
        {" "}
        Built it in <span className="text-yellow-600">@ </span> 2024
      </span>
      <div className="h-[1vh]" />
      <a
        href="https://www.aayushrajshakya.com.np/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:bg-gray-900 py-2 px-12 bg-gray-800 border border-stone-600">
          <h1 className="text-red-200 text-xl">DEMO</h1>
        </button>
      </a>
      <div className="h-[2vh]" />
      <span>
        A sleek and dynamic portfolio website built using modern web
        technologies such as
        <span className="text-blue-500"> Next.js</span>,
        <span className="text-red-500"> Framer Motion</span>, to create a
        visually engaging and highly interactive user experience. Framer Motion
        enhances animations/
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
