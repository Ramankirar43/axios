import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import img1 from '../../assets/contact/emailIcon.png';
import img3 from '../../assets/contact/githubIcon.png';
import img2 from '../../assets/contact/linkedinIcon.png';
export const Contact = () => {
  return (
    <section className={styles.section} id="contact">
    <footer  className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p>© Made By Raman 2025</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={img1} alt="Email icon" />
          <a href="mailto:ramankirar0555@email.com" target="_blank" 
          rel="noopener noreferrer">axios123@email.com
          
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={img2}
            alt="LinkedIn icon"
            
          />
          <a href="https://www.linkedin.com/in/raman-kirar-548561296/" target="_blank" 
      rel="noopener noreferrer">linkedin.com/AxiosIIITBhopal</a>
        </li>
        <li className={styles.link}>
          <img src={img3} alt="Github icon" />
          <a href="https://github.com/Ramankirar43" target="_blank" 
          rel="noopener noreferrer">github.com/Axios.Projects</a>
        </li>
      </ul>
    </footer>
    </section>
  );
};