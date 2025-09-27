import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Header() {
  return (
    <header className={`fixed w-full top-0 flex flex-row justify-between items-center p-3 mb-5 z-50 ${montserrat.className} backdrop-blur-xl z-50`}>
      <h2 className="text-white md:scale-125">boomer934</h2>
      <Link href={"https://github.com/boomer934"} prefetch={true} target="_blank">
      <div className=" flex gap-2 items-center">
        Github
        <Image
          src={"/github-bianca-removebg-preview.png"}
          width={40}
          height={40}
          alt="github image"
          />
      </div>
      </Link>
    </header>
  );
}
