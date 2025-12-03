"use client";
import React, { useState } from "react";
import { Pages, useStore } from "@/lib/zustand";


import PersonalPage from "./pages/PersonalPage";
import ReactPage from "./pages/ReactPage";
import JavaScript from "./pages/JavaScript";
import PrismaPage from "./pages/PrismaPage";
import TypeScript from "./pages/TypeScript";
import XClonePage from "./pages/XClonePage";
import AIChatPage from "./pages/AIChatPage";
import FramerPage from "./pages/FramerPage";
import NationalIdPage from "./pages/NationalIdPage";
import { Skills } from "@/lib/Skills";
import HTMLpage from "./pages/HTMLpage";
import CssPage from "./pages/CssPage";
import NextPage from "./pages/NextPage";
import ResumeBuilderPage from "./pages/ResumeBuilderPage";
import PortfolioPage from "./pages/Porfolio";
import { ResumePage } from "./pages/Resume";
export default function Homepage() {
    const { pages, setPages } = useStore()

    return (
        <div className="flex gap-2 py-6">
            <div className="hidden lg:flex lg:w-[25%]">
                <div className="flex flex-col gap-10">
                    {/* Home Section */}
                    <div
                        onClick={() => setPages("Personal")}
                        className={`h-fit cursor-pointer px-2 relative z-0 ${pages === "Personal" ? "border border-red-400" : "border border-gray-200"
                            }`}
                    >
                        <h1 className="absolute -top-3 z-40 bg-[#0d1117] px-2">Home</h1>

                        <h1 className="pt-2">
                            Hello! I'm Sambid Shakya, a passionate frontend developer from Nepal :)
                        </h1>
                    </div>

                    {/* Projects Section */}
                    <div
                        className={`h-fit px-2 py-2 relative z-0 ${["XClonePage", "Chatbot", "NationalId","Resume Builder","Portfolio"].includes(pages)
                            ? "border border-red-400"
                            : "border border-gray-200"
                            }`}
                    >
                        <h1 className="absolute -top-3 z-40 bg-[#0d1117] px-2">Projects</h1>
                        <div className="absolute -top-7 right-0 z-40 pointer-events-none">
                            <img
                                src='elcapo.webp'
                                className='h-7 w-7'
                            />
                        </div>


                        <div className="h-2" />
                        {[
                            { name: "XClonePage", label: "X (Twitter) Clone" },
                            { name: "Chatbot", label: "Chatbot" },
                            { name: "NationalId", label: "National Id Registration Portal" },
                            {name:"Resume Builder",label:"Resume Builder"},
                            {name:"Portfolio",label:"Portfolio Website"}
                        ].map((project) => (
                            <div
                                key={project.name}
                                onClick={() => setPages(project.name as Pages)}
                                className={`w-full hover:bg-gray-800 -pl-2 -pr-2 ${pages === project.name ? "bg-gray-800" : "bg-none"
                                    }`}
                            >
                                <ul className="px-4">
                                    <li className="list-disc">{project.label}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Skills Section */}
                    <div
                        className={`h-fit cursor-pointer px-2 relative z-0 pb-2 ${[
                            "HTML",
                            "CSS / Tailwind CSS",
                            "JavaScript",
                            "TypeScript",
                            "React",
                            "Next.Js",
                            "Prisma",
                            "Framer Motion",
                        ].includes(pages)
                            ? "border border-red-400"
                            : "border border-gray-200"
                            }`}
                    >

                        <h1 className="absolute -top-3 z-40 bg-[#0d1117] px-2">Skills</h1>
                        <div className="absolute -top-11 right-0  z-40 pointer-events-none">
                            <img
                                src='cute.webp'
                                className='h-12 w-24'
                            />
                        </div>

                        <div className="h-4" />
                        {Skills.map((skill, i) => (
                            <div
                                key={i}
                                onClick={() => setPages(skill.name as Pages)}
                                className={`w-full cursor-default hover:bg-gray-800 -pl-2 -pr-2 ${pages === skill.name ? "bg-gray-800" : "bg-none"
                                    }`}
                            >
                                <ul 
                                
                                className="px-4">
                                    <li className="list-disc">
                                        <div className="flex items-center gap-1 h-full">
                                            {skill.name}
                                            {skill.icon && <skill.icon />}
                                        </div>
                                    </li>
                                </ul>
                               
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-[2vh]" />
            </div>
            {/* Content Display Section */}
            <div className="w-[100%] lg:w-[75%]">
                {pages === "Personal" && <PersonalPage />}
                {pages === "XClonePage" && <XClonePage />}
                {pages === "Chatbot" && <AIChatPage />}
                {pages === "NationalId" && <NationalIdPage />}
                {pages === "HTML" && <HTMLpage />}
                {pages === "Framer Motion" && <FramerPage />}
                {pages === "CSS / Tailwind CSS" && <CssPage />}
                {pages === "JavaScript" && <JavaScript />}
                {pages === "TypeScript" && <TypeScript />}
                {pages === "Prisma" && <PrismaPage />}
                {pages === "React" && <ReactPage />}
                {pages === "Next.Js" && <NextPage />}
                {pages === "Resume Builder" && <ResumeBuilderPage/>}
                {pages === "Portfolio" && <PortfolioPage/>}
                {pages === "Resume" && <ResumePage/>}
            </div>
        </div >
    );
}
