import React from "react";
import { ImageCarasoul } from "../ImageCarasoul";
import { ImagesData } from "./XClonePage";
import CardRapper from "../CardRapper";
export default function NationalIdPage() {
  const images: ImagesData[] = [
    {
      src: "/gov.png",
    },
    {
      src: "/gov2.png",
    },
    {
      src: "/gov3.png",
    },
    {
      src: "/gov4.png",
    },
    {
      src: "/gov5.png",
    },
  ];

  return (
    <CardRapper>
      <span className="font-bold">
        {" "}
        Built it in <span className="text-yellow-600">@ </span> 2023
      </span>
      <div className="h-[1vh]" />
      <a
        href=" https://govfinal.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:bg-gray-900 py-2 px-12 bg-gray-800 border border-stone-600">
          <h1 className="text-red-200 text-xl">DEMO</h1>
        </button>
      </a>
      <div className="h-[2vh]" />

      <span>
        <span className="font-semibold text-gray-800">
          National ID Registration Portal
        </span>{" "}
        — a modern web application designed to streamline the process of
        identity registration for citizens. Built with the powerful{" "}
        <span className="text-blue-500">Next.js</span> framework, it delivers a
        fast, responsive, and dynamic user experience from start to finish. The
        platform seamlessly integrates
        <span className="text-violet-600">Resend</span> to enable real-time
        email communication for verification and notifications, while{" "}
        <span className="text-red-500">Next-Auth</span> ensures secure user
        authentication.
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
