import {create} from "zustand"
export type Pages =
    | "Personal"
    | "Projects"
    | "Skills"
    | "XClonePage"
    | "Chatbot"
    | "NationalId"
    | "Resume Builder"
    | "HTML"
    | "CSS / Tailwind CSS"
    | "JavaScript"
    | "TypeScript"
    | "React"
    | "Next.Js"
    | "Prisma"
    | "Portfolio"
    | "Framer Motion"
    | "Resume";


interface PageStore{
    pages:Pages,
    setPages:(pages:Pages)=>void
}
export const useStore=create<PageStore>((set)=>({
    pages:"Personal",
    setPages:(pages)=>set({pages})
}))