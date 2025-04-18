import React from 'react';
import styles from './Experience.module.css';
import image1 from '../../assets/history/google.png';
import image2 from '../../assets/history/inspirelogo.png';
import image3 from '../../assets/history/netflix.png';
export const Experience = () => {
  return (
    <section className={styles.exp} id="experience">
      <h3 className={styles.title}>Experience</h3>
      {/* <div className={styles.exp1}>
        <img className={styles.img} src={image1} alt="Google Logo" />
        <div className={styles.description}>
          <div className={styles.post}>
            <h4 className={styles.Name}>SDE, Google</h4> 
          </div>
          <div className={styles.dur}>
            <p className={styles.duration}>March 2025</p> 
          </div>
          <div className={styles.detail}>
            <ul>
              <li>Developed advanced navigation features in Google Maps.</li>
              <li>Enhanced user experience by implementing optimized algorithms.</li>
              <li>Collaborated with cross-functional teams to ensure seamless integration.</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <div className={styles.exp1}>
        <img className={styles.img} src={image3} alt="Google Logo" />
        <div className={styles.description}>
          <div className={styles.post}>
            <h4 className={styles.Name}>SDE, Google</h4> 
          </div>
          <div className={styles.dur}>
            <p className={styles.duration}>March 2025</p> 
          </div>
          <div className={styles.detail}>
            <ul>
              <li>Developed advanced navigation features in Google Maps.</li>
              <li>Enhanced user experience by implementing optimized algorithms.</li>
              <li>Collaborated with cross-functional teams to ensure seamless integration.</li>
            </ul>
          </div>
        </div>      
      </div> */}

      <div className={styles.exp1}>
        <img className={styles.img} src={image2} alt="Logo" />
        <div className={styles.description}>
          <div className={styles.post}>
            <h4 className={styles.Name}>Web Developer, Inspire </h4> 
          </div>
          <div className={styles.dur}>
            <p className={styles.duration}>November 2024 - Present</p>
          </div>
          <div className={styles.detail}>
            <ul>
              <li>Inspire is Techno-Spritual Club of IIIT Bhopal.</li>
              <li>Collaborating on web development initiatives and contributing to technical discussions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
