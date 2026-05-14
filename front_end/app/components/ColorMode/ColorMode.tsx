"use client";

import React from "react";
import styles from "./color-mode.module.css";

interface ColorModeProps {
    isDark: boolean;
    onClick?: () => void;
}

export default function ColorMode({ isDark, onClick }: ColorModeProps) {
    return (
        <button
            className={`${styles["color-mode-button"]} ${isDark ? styles.dark : styles.light}`}
            onClick={onClick}
            aria-label="ダークモード切り替え"
            aria-pressed={isDark}
        />
    )
}