"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import HexagonLogo from "./SiteLogo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const hamburgerRef = useRef();

  // Toggles the menu state
  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent click propagation
    setIsOpen((prev) => !prev); // Toggle menu open/close state
  };

  // Closes the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handles clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click target is outside both the nav menu and the hamburger button
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu(); // Close the menu if clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="px-4 md:px-[60px] py-3 border-b-[1px] border-dotted border-[#ffffff20]">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link href="/" alt="site-logo" title="Website Logo">
              <HexagonLogo />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center">
            {/* Navigation Menu */}
            <div
              ref={navRef}
              className={`${styles.nav} ${isOpen ? "" : "hidden"} md:flex`}
            >
              <ul className={styles.navItems}>
                <li>
                  <Link href="/blog" onClick={closeMenu}>
                    Blog
                  </Link>
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
                <li>Work</li>
              </ul>

              <button className={` ${styles.navCta}`} onClick={closeMenu}>
              <Link href="/contact" onClick={closeMenu}>
                  Hire Me
                </Link>
              </button>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <div
                ref={hamburgerRef}
                className={` ${styles.bar} ${isOpen ? styles.isOpen : ""} `}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
