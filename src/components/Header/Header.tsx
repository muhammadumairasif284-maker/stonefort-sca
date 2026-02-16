"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/Market", label: "Market" },
  { href: "/accounts", label: "Accounts" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Optional: prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      {/* 1) Risk warning bar */}
      <div className={styles.risk}>
        <div className={styles.container}>
          <p className={styles.riskText}>
            <strong>Risk Warning:</strong> Trading Contracts for Difference (CFDs) on margin involves a
            high level of risk and may not be suitable for all investors. You should ensure that you
            fully understand the risks involved before trading.
          </p>
        </div>
      </div>

      {/* 2) Main header row */}
      <div className={styles.top}>
        <div className={styles.containerTop}>
          {/* Left: brand logo */}
          <div className={styles.brand} aria-label="Stonefort Securities">
            <Link href="/" className={styles.logoLink} onClick={closeMenu}>
              <Image
                src="/logo/stonefortLogo.png"
                alt="Stonefort Securities"
                width={220}
                height={60}
                priority
                className={styles.logo}
              />
            </Link>
            
          </div>

          {/* Tablet/Mobile: Menu toggle button */}
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Primary navigation">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: actions */}
          <div className={styles.actions}>
            <Link href="/login" className={styles.login}>
              Login
            </Link>
            <Link href="/live-account" className={styles.live}>
              Live Account
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      <div className={`${styles.drawerWrap} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />

        <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={styles.drawerTop}>
            <span className={styles.drawerTitle}>Menu</span>
            <button type="button" className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">
              ✕
            </button>
          </div>

          <nav id="primary-navigation" className={styles.drawerNav} aria-label="Primary navigation (mobile)">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.drawerLink} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.drawerActions}>
            <Link href="/login" className={styles.drawerLogin} onClick={closeMenu}>
              Login
            </Link>
            <Link href="/live-account" className={styles.drawerLive} onClick={closeMenu}>
              Live Account
            </Link>
          </div>
        </aside>
      </div>


    </header>
  );
}