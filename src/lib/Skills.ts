import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiFramer, SiJavascript, SiTypescript } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { IconType } from "react-icons";
interface Skills {
    id:number
    name:string
    icon:IconType | null
}
export const Skills:Skills[] = [
    { id: 1, name: "HTML", icon: FaHtml5 },
    { id: 2, name: "CSS / Tailwind CSS", icon: RiTailwindCssLine },
    { id: 3, name: "JavaScript", icon: SiJavascript },
    { id: 4, name: "TypeScript", icon: SiTypescript},
    { id: 5, name: "React", icon: FaReact },
    { id: 6, name: "Next.Js", icon: RiNextjsLine },
    { id: 7, name: "Prisma", icon: SiPrisma },
    { id: 8, name: "Framer Motion", icon: SiFramer }
  ];