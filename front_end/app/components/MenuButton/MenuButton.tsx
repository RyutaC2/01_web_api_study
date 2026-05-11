"use client";

import React from "react";
import "./MenuButton.css";

interface MenuButtonProps {
    isOn: boolean;
    onClick?: () => void;
}

export default function MenuButton({ isOn, onClick }: MenuButtonProps) {
    return (
        <button 
            className={`menu-button ${isOn ? "active" : ""}`}
            onClick={onClick}
        />
    )
}