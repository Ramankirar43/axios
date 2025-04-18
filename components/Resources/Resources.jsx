import React from "react";
import { Link } from "react-router-dom";
import styles from "./Resource.module.css";

export const Resources = () => {
  const buttons = [
    "AI & ML",
    "Web Dev",
    "App Dev",
    "Data Science",
    "Cloud",
    "Cybersecurity",
    "DevOps",
    "Graphic Designing",
    "VLSI",
    "3D Modelling",
    
  ];

  return (
    <div className={styles.section} id="resource">
      <h2 className={styles.title}>Resources</h2>
      <div className={styles.buttonContainer}>
        {buttons.map((label, index) => (
          <Link key={index} to="/comingsoon">
            <button className={styles.resourceButton}>
              {label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
