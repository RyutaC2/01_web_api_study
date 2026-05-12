"use client";

import React from "react";
import "./ColorMode.css";

interface ColorModeProps {
    isDark: boolean;
    onClick?: () => void;
}

export default function ColorMode({ isDark, onClick }: ColorModeProps) {
    return (
        <button
            className={`color-mode-button ${isDark ? "dark" : "light"}`}
            onClick={onClick}
        />
    )
}