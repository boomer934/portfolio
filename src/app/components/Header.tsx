import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-3 bg-violet-300 mb-5">
      <h2 className="text-white">boomer934</h2>
      <div className=" flex gap-2 items-center">
        Github
        <Image
          src={"/github-bianca-removebg-preview.png"}
          width={40}
          height={40}
          alt="github image"
        />
      </div>
    </header>
  );
}
