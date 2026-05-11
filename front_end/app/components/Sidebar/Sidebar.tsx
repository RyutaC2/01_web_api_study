"use client";

import React from "react";
import "./Sidebar.css";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({isOpen}: SidebarProps) {
    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul>
                <li><button>$ cd ~</button></li>
                <li><button>$ whoami</button></li>
                <li><button>$ echo $HOBBY</button></li>
                <li><button>$ cat .my-tech</button></li>
                <li><button>$ ssh ryuta@contact</button></li>
            </ul>
        </nav>
    );
}