"use client";

import styles from "./menu-button.module.css";
import Tooltip from "../UI/Tooltip";

interface MenuButtonProps {
    isOn: boolean;
    onClick?: () => void;
}

export default function MenuButton({ isOn, onClick }: MenuButtonProps) {
    return (
        <Tooltip text={isOn ? "メニューを閉じる" : "メニューを開く"}>
            <button 
                className={`${styles["menu-button"]} ${isOn ? styles.active : ""}`}
                onClick={onClick}
                aria-label={isOn ? "メニューを閉じる" : "メニューを開く"}
                aria-pressed={isOn}
            />
        </Tooltip>
    )
}