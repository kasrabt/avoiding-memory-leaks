"use client";

import { useState } from "react";
import ShowComments from "./components/show-comments";

export default function HomePage() {
  const [showComments, setShowComments] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <button onClick={() => setShowComments(!showComments)} className=" bg-white rounded-lg py-2 px-4 font-medium my-5 text-black justify-center items-center flex">
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <ShowComments />}
    </main>
  );
}
