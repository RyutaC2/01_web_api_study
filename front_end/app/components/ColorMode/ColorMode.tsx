"use client";

import React from "react";
import "./ColorMode.css";

interface ColorModeProps {
    isDark: boolean;
    onToggle?: () => void;
}

export default function ColorMode({ isDark, onToggle }: ColorModeProps) {
    return (
        <button
            className={`color-mode-button ${isDark ? "dark" : "light"}`}
            onToggle={onToggle}
        />
    )
}