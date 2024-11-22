"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigate() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "⭐️" : null}
        </li>
        <li>
          <Link href="/About-Us">About-Us</Link>
          {path === "/About-Us" ? "⭐️" : null}
        </li>
      </ul>
    </nav>
  );
}
