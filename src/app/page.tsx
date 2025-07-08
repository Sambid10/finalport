
import Homepage from "./_components/Homepage";
import SidebarComponent from "./_components/SidebarComponent";
import LeftSidebarComponent from "./_components/LeftSidebarComponent";
export default function Home() {
  return (
    <div className="min-h-[100dvh] max-w-[92rem] px-4 xl:px-2 font-mono mx-auto text-[1.2rem]">
      <Homepage />
      <SidebarComponent />
      <LeftSidebarComponent />
      <span className="fixed bottom-4 h-fit w-screen -mx-4">
        <div className="flex w-full justify-center items-center gap-8 text-xs md:text-base">
        <span className="text-[#E4405F]">Instagram</span>
          <span className="text-green-200">GitHub</span>
          <span className="text-[#1DA1F2]">Facebook</span>
          <span className="text-[#0A66C2]">LinkedIn</span>
    
        </div>
       
      </span>
    </div>
  );
}
