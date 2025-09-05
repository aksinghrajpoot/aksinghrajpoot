"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import HexagonLogo from "./SiteLogo";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  // Toggle menu open/close state
  const toggleMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Closes the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | globalThis.MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="px-4 md:px-[60px] py-3 border-b-[1px] border-dotted border-[#ffffff30]">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link href="/" title="Website Logo">
              <HexagonLogo />
            </Link>
          </div>

          {/* Navigation Section */}
          <nav className={`${isOpen ? "" : "hidden md:flex"}`}>
            {/* Navigation Menu */}
            <div
              ref={navRef}
              className={`${styles.nav}`}
            >
              <ul className={styles.navItems}>
                <li>
                  <a
                    href="/blog/"
                    onClick={closeMenu}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link href="/about" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/resources" onClick={closeMenu}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/experience" onClick={closeMenu}>
                    Experience
                  </Link>
                </li>
              </ul>

              <Link href="/contact" onClick={closeMenu}>
                <button className={styles.navCta}>Hire Me</button>
              </Link>
            </div>
          </nav>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <div
              ref={hamburgerRef}
              className={`${styles.bar} ${isOpen ? styles.isOpen : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
