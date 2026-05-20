"use client";

import React from "react";
import styles from "./sidebar.module.css";
import { useRouter } from "next/navigation";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({isOpen}: SidebarProps) {

    const router = useRouter();

    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""} bg-[#242424] dark:bg-[#656565]`}>
            <ul className={`${styles["sidebar-list"]} mt-16 sm:mt-24`}>
                <li><button onClick={() => router.push("/")}>cd ~</button></li>
                <li><button onClick={() => router.push("/about")}>whoami</button></li>
                <li><button onClick={() => router.push("/about/hobby")}>echo $HOBBY</button></li>
                <li><button onClick={() => router.push("/about/tech")}>cat .my-tech</button></li>
                <li><button onClick={() => router.push("/about/contact")}>ssh ryuta@contact</button></li>
            </ul>
        </nav>
    );
}