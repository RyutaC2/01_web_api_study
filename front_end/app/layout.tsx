"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";
import ColorMode from "./components/ColorMode/ColorMode";
import MenuButton from "./components/MenuButton/MenuButton";
import Sidebar from "./components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  return (
    <html lang="ja" className={isDark ? "dark" : "light"}>
      <head>
        <title>my-data-repository</title>
      </head>
      <body className="flex flex-col min-h-screen h-full font-sans text-[#101010] dark:text-[#e2e2e2] bg-[#e2e2e2] dark:bg-[#101010]">
        <header className="z-10 h-16 sm:h-24 flex p-4 sm:p-6 text-white bg-[#333]">
          <MenuButton
            isOn={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <button
            onClick={() => router.push("/")}
            className="mr-auto ml-auto text-2xl sm:text-4xl cursor-pointer"
          >
            Hello WebSite !!
          </button>
          <ColorMode
            isDark={isDark}
            onClick={() => setIsDark(!isDark)}
          />
        </header>
        <Sidebar isOpen={isOpen} />
        <main className="p-6 sm:pl-[30%] sm:pr-[30%] select-none">
          {children}
        </main>
        <footer className="z-10 mt-auto p-6 text-white text-center bg-[#333]">
          <small className="select-none">
            © 2026 RyutaC2. All rights reserved.
          </small>
        </footer>
      </body>
    </html>
  );
}