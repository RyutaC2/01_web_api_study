'use client';

import React from 'react';
import './MenuButton.css';

interface MenuButtonProps {
    onClick?: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps) {
    return (
        <button 
            className="menu-button"
            onClick={onClick}
        />
    )
}