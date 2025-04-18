import React from "react";
import styles from "./Community.module.css";

export const Community= () => {
  return (
    <section className={styles.section} id="team">
    <div className="marquee-container">
      <div className="marquee">
        <span className="marquee-text">
          CODAME&nbsp;&nbsp;&nbsp;NIIMACK&nbsp;&nbsp;&nbsp;GDSC&nbsp;&nbsp;&nbsp;ARZOO&nbsp;&nbsp;&nbsp;INSPIRE&nbsp;&nbsp;&nbsp;
        </span>
        {/* Duplicate to create infinite loop */}
        <span className="marquee-text">
          CODAME&nbsp;&nbsp;&nbsp;NIIMACK&nbsp;&nbsp;&nbsp;GDSC&nbsp;&nbsp;&nbsp;ARZOO&nbsp;&nbsp;&nbsp;INSPIRE&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
    </section>
  );
};

