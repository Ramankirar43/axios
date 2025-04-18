import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
// import { getImageUrl } from "../../assets/hero/heroImage.png";
// import heroImage from '../../assets/hero/heroimagerk7.jpg';
import heroImage2 from "../../assets/hero/WhatsApp Image 2025-04-16 at 18.50.09_fc6bff16.jpg";
// import heroImage2 from "../../assets/hero/image.png";
export const Hero = () => {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        
        'Innovations',
        'Machine Learning',
        'FullStack Development ',
        'Artificial Intelligence',
        'Cloud Computing',
        'APP Development',
        'Graphic Designing',
        'VLSI',
        'Data Science'
      ],
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup to destroy Typed instance when component unmounts
    return () => typed.destroy();
  }, []);
  const handleRedirect = (path) => {
    navigate(path); 
  };
  return (
    <section className={styles.section}>
      
      <div className={styles.content}>
        <h1 className={styles.name}>Development Club of IIIT Bhopal</h1>
        <div className={styles.heading}>
          Let's Do{' '}
          <span className={styles.role} ref={typedRef}></span>

        </div>
        <div className={styles.buttons}>
      <button className={styles.navButton} onClick={() => handleRedirect("/login")}>
              Login
            </button>
          
            <button className={styles.navButton} onClick={() => handleRedirect("/signup")}>
              Signup
            </button>
            
          
        {/* <p className={styles.motto}> Code  Create  Conquer</p> */}
      
      </div>
        {/* <p className={styles.desc}>
          I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.
          Click the button below to know more.
        </p> */}
        <div>
        {/* <a href="mailto:ramankirar07@gmail.com" className={styles.btn}>
          Hire Me
        </a> */}
      </div>
        
      </div>
      <img
        src={heroImage2}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

     
    </section>
  );
};


