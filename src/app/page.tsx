import Homepage from "./_components/Homepage";
import SidebarComponent from "./_components/SidebarComponent";
import LeftSidebarComponent from "./_components/LeftSidebarComponent";
import { footerLinks } from "@/lib/FooterLinks";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-[100dvh] max-w-[92rem] px-4 xl:px-2 font-mono mx-auto text-[1.2rem]">
      <Homepage />
      <SidebarComponent />
      <LeftSidebarComponent />
      <span className="fixed bottom-4 h-fit w-screen -mx-4">
        <div className="flex w-full justify-center items-center gap-8 text-xs md:text-base">
          {footerLinks.map((link,i)=>
            <Link key={i} href={link.href}>
              <h1 className={link.color}>{link.title}</h1>
            </Link>
          )}
        </div>
      </span>
    </div>
  );
}
