
import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Us</h2>
      <div className={styles.main}>
        <div className={styles.text}>
          <p>
            Welcome to the Development Club of IIIT Bhopal – a community of
            curious minds, passionate coders, and tech enthusiasts working
            together to innovate, build, and grow.
          </p>
          <p>
            Our mission is to empower students with the skills, mentorship, and
            opportunities needed to thrive in the modern tech world. Whether
            it's web development, app development, machine learning,
            artificial intelligence, VLSI, or cloud computing, we aim to create
            an environment that encourages exploration, collaboration, and
            hands-on learning.
          </p>
          <p>
            We believe in learning by doing. Through hackathons, coding
            challenges, workshops, and real-world projects, we provide a
            platform where creativity meets code and ideas turn into impactful
            solutions.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={`${styles.card} ${styles.blue}`}>
            <h3>20+</h3>
            <p>Tech Domains</p>
          </div>
          <div className={`${styles.card} ${styles.purple}`}>
            <h3>80+</h3>
            <p>Yearly Events</p>
          </div>
          <div className={`${styles.card} ${styles.pink}`}>
            <h3>200+</h3>
            <p>Projects</p>
          </div>
          <div className={`${styles.card} ${styles.cyan}`}>
            <h3>10k+</h3>
            <p>Students Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
};
