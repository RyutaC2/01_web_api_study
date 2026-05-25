"use client"

import Link from "next/link";
import styles from "./account-button.module.css";

export default function AccountButton() {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return (
            <Link
                href="/user/account"
                className={`${styles["account-button"]} ${styles["logged-in"]}`}
                aria-label="アカウント"
            />
        );
    }

    return (
        <Link
            href="/user/login"
            className={styles["account-button"]}
            aria-label="ログイン"
        />
    );
}