import React from "react";
import { CodeBlock } from "../codeeditor/Codeeditor";
import { NextCode, prismacode, ReactCode } from "@/lib/codes";
import CardRapper from "../CardRapper";
export default function NextPage() {
  return (
    <CardRapper>
      <div className="flex justify-center  w-full mb-4">
        <img className="h-32 w-32 " src="next.svg" />
      </div>
      <div className="h-[2vh]" />
      <span className="text-blue-500">Next.js</span> is a{" "}
      <span className="text-green-500">React framework</span> that enables{" "}
      <span className="text-orange-500">server-side rendering</span> and{" "}
      <span className="text-purple-500">static site generation</span>. It
      simplifies the creation of{" "}
      <span className="text-teal-500">full-stack applications</span> with
      features like <span className="text-yellow-500">API routes</span> and{" "}
      <span className="text-red-500">dynamic routing</span>.<br />
      I've worked extensively with{" "}
      <span className="text-blue-500">Next.js</span>, appreciating its{" "}
      <span className="text-cyan-500">performance optimizations</span> and
      features like{" "}
      <span className="text-indigo-500">incremental static regeneration</span>{" "}
      and <span className="text-pink-500">built-in image optimization</span>.
      It's great for creating <span className="text-lime-500">scalable</span>{" "}
      and <span className="text-teal-500">SEO-friendly</span> web applications.
      <br />
      <div className="h-[2vh]" />
      <span>
        {" "}
        For me, <span className="text-blue-500">Next.js</span> is invaluable for{" "}
        <span className="text-orange-500">building scalable apps</span>,
        ensuring <span className="text-green-500">efficiency</span> and
        maintaining <span className="text-purple-500">clean architecture</span>.
      </span>
      <div className="h-[2vh]" />
      <div className="border border-gray-600 px-4 py-4">
        <CodeBlock filename="route.ts" language="ts" code={NextCode} />
      </div>
    </CardRapper>
  );
}
