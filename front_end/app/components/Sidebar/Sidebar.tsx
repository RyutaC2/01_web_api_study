"use client";

import styles from "./sidebar.module.css";
import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({isOpen, onClose}: SidebarProps) {
    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""} bg-[#242424] dark:bg-[#656565]`}>
            <ul className={`${styles["sidebar-list"]} mt-16 sm:mt-24`}>
                <li><Link href="/" onClick={onClose} className="block w-full h-full">cd ~</Link></li>
                <li><Link href="/about" onClick={onClose} className="block w-full h-full">whoami</Link></li>
                <li><Link href="/about/hobby" onClick={onClose} className="block w-full h-full">echo $HOBBY</Link></li>
                <li><Link href="/about/tech" onClick={onClose} className="block w-full h-full">cat .my-tech</Link></li>
                <li><Link href="/about/contact" onClick={onClose} className="block w-full h-full">ssh ryuta@contact</Link></li>
            </ul>
        </nav>
    );
}