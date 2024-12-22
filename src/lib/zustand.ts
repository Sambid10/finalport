import {create} from "zustand"
export type Pages =
    | "Personal"
    | "Projects"
    | "Skills"
    | "XClonePage"
    | "AIChatbot"
    | "NationalId"
    | "HTML"
    | "CSS / Tailwind CSS"
    | "JavaScript"
    | "TypeScript"
    | "React"
    | "Next.Js"
    | "Prisma"
    | "Framer Motion";


interface PageStore{
    pages:Pages,
    setPages:(pages:Pages)=>void
}
export const useStore=create<PageStore>((set)=>({
    pages:"Personal",
    setPages:(pages)=>set({pages})
}))