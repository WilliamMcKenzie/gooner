"use client"

import Image from "next/image";

export default function Home() {
  async function generate() {
    await fetch(`/api/generate?name=William`, { method: "GET" })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button onClick={generate}>
          Generate
      </button>
    </div>
  );
}
