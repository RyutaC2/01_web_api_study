"use client";

import React, { useState } from "react";
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
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <html lang="ja">
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
            onToggle={() => setIsDark(prev => !prev)}
          />
        </header>
        <Sidebar isOpen={isOpen} />
        <main>{children}</main>
        <footer>
          <small>© 2026 You are an idiot!!</small>
        </footer>
      </body>
    </html>
  );
}