"use client";

import styles from "./color-mode.module.css";
import Tooltip from "../UI/Tooltip";

interface ColorModeProps {
    isDark: boolean;
    onClick?: () => void;
}

export default function ColorMode({ isDark, onClick }: ColorModeProps) {
    return (
        <Tooltip text="カラーモード切り替え" position="bottom-left">
            <button
                className={`${styles["color-mode-button"]} ${isDark ? styles.dark : styles.light}`}
                onClick={onClick}
                aria-label="ダークモード切り替え"
                aria-pressed={isDark}
            />
        </Tooltip>
    )
}