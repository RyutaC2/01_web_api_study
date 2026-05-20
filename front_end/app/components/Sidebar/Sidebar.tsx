"use client";

import styles from "./sidebar.module.css";
import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({isOpen}: SidebarProps) {
    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""} bg-[#242424] dark:bg-[#656565]`}>
            <ul className={`${styles["sidebar-list"]} mt-16 sm:mt-24`}>
                <li><Link href="/">cd ~</Link></li>
                <li><Link href="/about">whoami</Link></li>
                <li><Link href="/about/hobby">echo $HOBBY</Link></li>
                <li><Link href="/about/tech">cat .my-tech</Link></li>
                <li><Link href="/about/contact">ssh ryuta@contact</Link></li>
            </ul>
        </nav>
    );
}