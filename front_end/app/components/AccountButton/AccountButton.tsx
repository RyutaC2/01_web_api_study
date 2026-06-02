"use client"

import Link from "next/link";
import styles from "./account-button.module.css";
import Tooltip from "../UI/Tooltip";

export default function AccountButton() {
    const isLoggedIn = false;

    if (isLoggedIn) {
        return (
            <Tooltip text="アカウント" position="bottom-left">
                <Link
                    href="/user/account"
                    className={`${styles["account-button"]} ${styles["logged-in"]}`}
                    aria-label="アカウント"
                />
            </Tooltip>
        );
    }

    return (
        <Tooltip text="ログイン" position="bottom-left">
            <Link
                href="/user/login"
                className={styles["account-button"]}
                aria-label="ログイン"
            />
        </Tooltip>
    );
}