import React from "react";
import styles from "./Gallery.module.css";

// import img1 from "../../assets/gallery/aiml.png";
// import img2 from "../../assets/gallery/app.png";
// import img3 from "../../assets/gallery/cloud.png";
// import img4 from "../../assets/gallery/ds.png";
// import img5 from "../../assets/gallery/webdev.png";
// import img6 from "../../assets/gallery/socialmedia.png";
import img7 from "../../assets/gallery/session.png";
import img8 from "../../assets/gallery/img.png";
import img9 from "../../assets/gallery/image.png";
import img10 from "../../assets/gallery/image1.png";

const images = [img7, img9, img8,img10, img7, img9, img8,img10,  img7, img9, img8,img10];

export const Gallery = () => {
  return (
    <div className={styles.section} id="gallery">
        <h2 className={styles.title}>Gallery </h2>
    <div className={styles.galleryContainer}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} className={styles.image} />
          ))}
          {/* Duplicate for seamless loop */}
          {images.map((img, index) => (
            <img key={`dup-${index}`} src={img} alt={`Gallery duplicate ${index}`} className={styles.image} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
