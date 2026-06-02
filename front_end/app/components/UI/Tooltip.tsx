"use client";

import { useState, useRef } from "react";

type TooltipProps = {
    text: string;
    children: React.ReactNode;
    className?: string;
    position?: Position;
};
type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export default function Tooltip({ text, children, className, position }: TooltipProps) {
    const [isHovered, setIsHovered] = useState(false);
    const positionClass: Record<Position, string> = {
        "top-right": "bottom-1/2 left-full -translate-x-[20%] mb-2",
        "top-left": "bottom-1/2 right-full translate-x-[20%] mb-2",
        "bottom-right": "top-1/2 left-full -translate-x-[20%] mt-2",
        "bottom-left": "top-1/2 right-full translate-x-[20%] mt-2",
    };

    const [isVisible, setIsVisible] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const HandleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            setIsVisible(true);
        }, 750);
    };
    const handleMouseLeave = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setIsVisible(false);
    };

    return (
        <div
            className={`relative inline-block z-50 ${className ?? ""}`}
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {isVisible && (
                <div
                    className={`absolute ${positionClass[position || "bottom-right"]} bg-[#444] text-white text-sm px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10`}
                >
                    {text}
                </div>
            )}
        </div>
    );
}