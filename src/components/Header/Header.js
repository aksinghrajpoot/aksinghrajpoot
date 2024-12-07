import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

function Header() {
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
            <div className={`${styles.nav} hidden md:flex`}>
              <ul className={styles.navItems}>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                
                <li>
                  <Link href="#about-me">About</Link>
                </li>
                <li>Experience</li>
                <li>Work</li>
              </ul>
              <button className={styles.navCta}>Resume</button>
            </div>
            <div className="md:hidden">
              <div className={` ${styles.bar}`}>
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
