import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";  // Added missing Link import
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="relative">
      <main>
       

        {/* Cross icon positioned on the right */}
        <div className="absolute top-[12px] left-[1320px] w-[20px] h-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
         
        </div>
       
      
         <Header/>
      </main>
    </div>
  );
}
