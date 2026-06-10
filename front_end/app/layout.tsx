"use client";

import React, { useState } from "react";
import "./globals.css";
import Link from "next/link";
import ColorMode from "./components/ColorMode/ColorMode";
import MenuButton from "./components/MenuButton/MenuButton";
import Sidebar from "./components/Sidebar/Sidebar";
import AccountButton from "./components/AccountButton/AccountButton";
import AIChat from "./components/AIChat/AIChat";
import JavaScriptDisabled from "./components/JavaScriptDisabled/JavaScriptDisabled";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  return (
    <html lang="ja" className={`${isDark ? "dark" : "light"} bg-[#333] scroll-smooth antialiased`} data-scroll-behavior="smooth">
      <head>
        <title>01_web_api_study</title>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="flex flex-col min-h-screen h-full font-sans text-[#101010] dark:text-[#e2e2e2] bg-[#e2e2e2] dark:bg-[#101010]">
        <header className="z-10 h-16 md:h-24 grid grid-cols-[1fr_2fr_1fr] items-center p-4 md:p-6 text-white bg-[#333]">
          <div className="flex items-center">
            <MenuButton
              isOn={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <Link href="/" className="mr-auto ml-auto text-[clamp(1rem,5.8vw,1.5rem)] md:text-4xl cursor-pointer select-none min-w-0">
            Hello WebSite !!
          </Link>
          <div className="flex items-center justify-end gap-4">
            <AccountButton/>
            <ColorMode
              isDark={isDark}
              onClick={() => setIsDark(!isDark)}
            />
          </div>
        </header>
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        {isOpen && (
          <button
            className="overlay"
            onClick={() => setIsOpen(false)}
            aria-label="サイドバーを閉じる"
          />
        )}
        <main className="p-3 md:p-6 md:pl-[10%] md:pr-[10%] lg:pl-[15%] lg:pr-[15%] xl:pl-[20%] xl:pr-[20%] 2xl:pl-[30%] 2xl:pr-[30%]">
          {children}
        </main>
          <AIChat/>
          <JavaScriptDisabled/>
        <footer className="flex gap-4 justify-content mt-auto p-6 text-white text-center bg-[#333]">
          <small className="select-none">
            © 2026 RyutaC2. All rights reserved.
          </small>
        </footer>
      </body>
    </html>
  );
}