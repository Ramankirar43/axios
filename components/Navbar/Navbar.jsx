
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import icon from "../../assets/nav/closeIcon.png";
import icon2 from "../../assets/nav/menuIcon.png";
import heroImage2 from "../../assets/hero/WhatsApp Image 2025-04-16 at 18.50.09_fc6bff16.jpg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className={styles.navbar} >
      {/* <img src={heroImage2} alt="Hero" className={styles.heroImg} /> */}
      <a className={styles.title} href="/">
        AXIOS
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? icon : icon2}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          {/* <li>
            <button className={styles.navButton} onClick={() => handleRedirect("/login")}>
              Login
            </button>
          </li>
          <li>
            <button className={styles.navButton} onClick={() => handleRedirect("/signup")}>
              Signup
            </button>
          </li> */}
         
          <li>
            <button className={styles.btnn}>
            <a className={styles.menuItems} href="#"  >Home
            </a>
            </button>
          

          </li>
          <li>
            <a className={styles.menuItems} href="#about" >About</a>
          </li>
          <li>
            <a className={styles.menuItems} href="#events">Events</a>
          </li>
          <li>
            <a className={styles.menuItems} href="#resource">Resources</a>
            
          </li>
          <li>
            <a className={styles.menuItems} href="#team">Team</a>
            
          </li>
          
          <li>
            <a className={styles.menuItems} href="#gallery">Gallery</a>
          </li>
          <li>
            <a className={styles.menuItems} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

