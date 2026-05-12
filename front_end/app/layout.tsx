"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import ColorMode from "./components/ColorMode/ColorMode";
import MenuButton from "./components/MenuButton/MenuButton";
import Sidebar from "./components/Sidebar/Sidebar";

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
    <html lang="ja" className={isDark ? "theme-dark" : "theme-light"}>
      <head>
        <title>my-data-repository</title>
      </head>
      <body>
        <header>
          <MenuButton
            isOn={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <h1 className="title">Hello WebSite !!</h1>
          <ColorMode
            isDark={isDark}
            onClick={() => setIsDark(!isDark)}
          />
        </header>
        <Sidebar isOpen={isOpen} />
        <main>{children}</main>
        <footer>
          <small>© 2026 RyutaC2. All rights reserved.</small>
        </footer>
      </body>
    </html>
  );
}