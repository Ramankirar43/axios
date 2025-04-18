import React from "react";
import styles from "./Team.module.css";

// Import images from your assets folder

import image4 from "../../assets/team/dp.png";


const teamMembers = [
  { name: "Ankit Kaushik", role: "Coordinator", img: image4 },
  { name: "Jitesh Shewaramani", role: "CO-Coordinator", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Pratham Updhyay", role: "AI/ML Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 },
  { name: "Alex Brown", role: "Lead", img: image4 }


 
];

export const Team = () => {
  return (
    <section className={styles.section} id="team">
      <h2 className={styles.title}>Our Team</h2>
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img src={member.img} alt={member.name} className={styles.image} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
