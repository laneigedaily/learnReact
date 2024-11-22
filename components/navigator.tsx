"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const path = usePathname();
  return (
    <nav>
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
