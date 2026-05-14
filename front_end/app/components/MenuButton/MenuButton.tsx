"use client";

import React from "react";
import styles from "./menu-button.module.css";

interface MenuButtonProps {
    isOn: boolean;
    onClick?: () => void;
}

export default function MenuButton({ isOn, onClick }: MenuButtonProps) {
    return (
        <button 
            className={`${styles["menu-button"]} ${isOn ? styles.active : ""}`}
            onClick={onClick}
            aria-label={isOn ? "メニューを閉じる" : "メニューを開く"}
            aria-pressed={isOn}
        />
    )
}