"use client";

import React from "react";
import styles from "./sidebar.module.css";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({isOpen}: SidebarProps) {
    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""} bg-[#242424] dark:bg-[#656565]`}>
            <ul className={`${styles["sidebar-list"]} mt-16 sm:mt-24`}>
                <li><button>cd ~</button></li>
                <li><button>whoami</button></li>
                <li><button>echo $HOBBY</button></li>
                <li><button>cat .my-tech</button></li>
                <li><button>ssh ryuta@contact</button></li>
            </ul>
        </nav>
    );
}