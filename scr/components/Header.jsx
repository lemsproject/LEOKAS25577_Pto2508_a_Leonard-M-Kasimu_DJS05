import React from "react";
import styles from "./Header.module.css";

/**
 * Header
 * Simple page header for the app.
 * @returns {JSX.Element}
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Podcast Discovery</h1>
    </header>
  );
}
