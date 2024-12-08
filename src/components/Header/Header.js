"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <header>
      <div className="px-4 md:px-[60px] py-5">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                className="cursor-pointer"
                width="40"
                height="40"
                alt="Logo"
                src="/static/logo.svg"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div
              ref={navRef}
              className={`${styles.nav} ${isOpen ? "block" : "hidden"} md:flex`}
            >
              <ul className={styles.navItems}>
                <li>
                  <Link href="/blog" onClick={closeMenu}>
                    Blog
                  </Link>
                </li>

                <li>
                  <Link href="#about-me" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>Experience</li>
                <li>Work</li>
              </ul>
              <button className={` ${styles.navCta}`} onClick={closeMenu}>
                Resume
              </button>
            </div>
            <div className="md:hidden">
              <div
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
