import React from "react";
import styles from "./ProjectCard.module.css";

import projectImage1 from "../../assets/events/image1.png";
import projectImage2 from "../../assets/projects/image.png";
import projectImage3 from "../../assets/projects/project.png";
import projectImage4 from "../../assets/events/image2.png";
import projectImage5 from "../../assets/events/image3.png";
import projectImage6 from "../../assets/events/image4.png";
import projectImage7 from "../../assets/events/image5.png";
import projectImage8 from "../../assets/events/image.png";
const projectImages = {
  image1: projectImage1,
  image2: projectImage2,
  image3: projectImage3,
  image4: projectImage4,
  image5: projectImage5,
  image6: projectImage6,
  image7: projectImage7,
  image8: projectImage8,
};

export const ProjectCard = ({
  project: { title, image },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={projectImages[image]} // Dynamic image loading
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
    
     
      
    </div>
  );
};
