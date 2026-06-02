"use client";

import styles from "./sidebar.module.css";
import Link from "next/link";
import Tooltip from "../UI/Tooltip";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({isOpen, onClose}: SidebarProps) {
    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""} bg-[#242424] dark:bg-[#656565]`}>
            <ul className={`${styles["sidebar-list"]} mt-16 md:mt-24`}>
                <li>
                    <Tooltip text="ホーム" className="w-full">
                        <Link href="/" onClick={onClose} className="block w-full h-full">cd ~</Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip text="自己紹介" className="w-full">
                        <Link href="/about" onClick={onClose} className="block w-full h-full">whoami</Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip text="趣味" className="w-full">
                        <Link href="/about/hobby" onClick={onClose} className="block w-full h-full">echo $HOBBY</Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip text="技術スタック" className="w-full">
                        <Link href="/about/tech" onClick={onClose} className="block w-full h-full">cat .my-tech</Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip text="お問い合わせ" className="w-full">
                        <Link href="/about/contact" onClick={onClose} className="block w-full h-full">ssh ryuta@contact</Link>
                    </Tooltip>
                </li>
            </ul>
        </nav>
    );
}