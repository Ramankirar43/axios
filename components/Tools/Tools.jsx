// import React from 'react';
// import styles from './Tools.module.css';
// import logo1 from '../../assets/stack/HTML.png';
// import logo3 from '../../assets/stack/Bootstrap.svg';
// import logo2 from '../../assets/stack/Tailwind.png';
// import logo5 from '../../assets/stack/Git.svg';
// import logo7 from '../../assets/stack/Javascript.svg';
// import logo6 from '../../assets/stack/MongoDB.svg';
// import logo4 from '../../assets/stack/React.png';
// // import { getImageUrl } from "../../utils";
// import logo8 from '../../assets/stack/Bash.svg';
// import logo9 from '../../assets/skills/node.png';
// import logo10 from '../../assets/stack/CSS.png';
// import logo11 from '../../assets/stack/Docker.svg';
// import logo12 from '../../assets/stack/Express.png';
// import logo13 from '../../assets/stack/Github.svg';
// import logo14 from '../../assets/stack/NextJsCircle.png';
// import logo15 from '../../assets/skills/figma.png';
// import logo16 from '../../assets/stack/MaterialUI.svg';
// import logo17 from '../../assets/stack/images6.jpeg';
// import logo18 from '../../assets/stack/Visual_Studio_Code_1.35_icon.svg.png';
// import logo19 from '../../assets/stack/python.svg';
// import logo20 from '../../assets/stack/TypeScript.svg';
// import logo21 from '../../assets/stack/Vercel.svg';
// export const Tools = () => {
//   return (
//     <section className={styles.tools}>
//         <h2 className={styles.title} >TOOLS</h2>
    
//         <div className={styles.imgdiv}>
//           <img src={logo1} alt="HTML Logo" className={styles.img} />
//           <p className={styles.stack}>HTML</p>
//           <img src={logo2} alt="Tailwind Logo" className={styles.img} />
//           <img src={logo7} alt="HTML Logo" className={styles.img} />   
//           <img src={logo4} alt="Tailwind Logo" className={styles.img} />
//           <img src={logo13} alt="Github Logo" className={styles.img} />
//           <img src={logo9} alt="ChartJs Logo" className={styles.img} />
//           <img src={logo6} alt="Tailwind Logo" className={styles.img} /> 
      
//       {/* </div>
//       <div className={styles.imgdiv}> */}
//       <img src={logo3} alt="Tailwind Logo" className={styles.img} />
//       <img src={logo18} alt="VS code Logo" className={styles.img} />
//       <img src={logo10} alt="CSS Logo" className={styles.img} />
//       <img src={logo11} alt="Docker Logo" className={styles.img} />
//       <img src={logo12} alt="Express Logo" className={styles.img} />
//       <img src={logo19} alt="python" className={styles.img} />
//       <img src={logo14} alt="NextJS Logo" className={styles.img} />
//       {/* </div>
//       <div className={styles.imgdiv}> */}
//       <img src={logo15} alt="Saas Logo" className={styles.img} />
//       <img src={logo16} alt="Angular Logo" className={styles.img} />
//       <img src={logo17} alt="MS OFFICE Logo" className={styles.img} />
//       <img src={logo5} alt="Tailwind Logo" className={styles.img} />
//       <img src={logo8} alt="Bash Logo" className={styles.img} />
//       <img src={logo20} alt="TypeScript Logo" className={styles.img} />
//       <img src={logo21} alt="Vercel Logo" className={styles.img} />   
//       </div>
    
//     </section>
//   );
// };

import React from 'react';
import styles from './Tools.module.css';
import logo1 from '../../assets/stack/HTML.png';
import logo3 from '../../assets/stack/Bootstrap.svg';
import logo2 from '../../assets/stack/Tailwind.png';
import logo5 from '../../assets/stack/Git.svg';
import logo7 from '../../assets/stack/Javascript.svg';
import logo6 from '../../assets/stack/MongoDB.svg';
import logo4 from '../../assets/stack/React.png';
// import logo8 from '../../assets/stack/Bash.svg';
import logo8 from '../../assets/stack/ISO_C++_Logo.svg.png';
import logo9 from '../../assets/skills/node.png';
import logo10 from '../../assets/stack/CSS.png';
import logo11 from '../../assets/stack/Docker.svg';
import logo12 from '../../assets/stack/Express.png';
import logo13 from '../../assets/stack/Github.svg';
import logo14 from '../../assets/stack/NextJsCircle.png';
import logo15 from '../../assets/skills/figma.png';
import logo16 from '../../assets/stack/MaterialUI.svg';
import logo17 from '../../assets/stack/images6.jpeg';
import logo18 from '../../assets/stack/Visual_Studio_Code_1.35_icon.svg.png';
import logo19 from '../../assets/stack/python.svg';
import logo20 from '../../assets/stack/TypeScript.svg';
import logo21 from '../../assets/stack/Vercel.svg';

export const Tools = () => {
  const toolsData = [
    { logo: logo1, name: "HTML" },
    { logo: logo10, name: "CSS" },
    { logo: logo2, name: "Tailwind" },
    { logo: logo7, name: "JavaScript" },
    { logo: logo4, name: "React" },
    { logo: logo6, name: "MongoDB" },
    { logo: logo9, name: "Node.js" },
    { logo: logo8, name: "C/C++" },
    
    { logo: logo3, name: "Bootstrap" },
    { logo: logo11, name: "Docker" },
    { logo: logo12, name: "Express" },
    { logo: logo13, name: "GitHub" },
    { logo: logo5, name: "Git" },
    { logo: logo14, name: "Next.js" },
    { logo: logo15, name: "Figma" },
    { logo: logo16, name: "MaterialUI" },
    { logo: logo17, name: "MS Office" },
    { logo: logo18, name: "VS Code" },
    { logo: logo19, name: "Python" },
    { logo: logo20, name: "TypeScript" },
    { logo: logo21, name: "Vercel" }
  ];

  return (
    <section className={styles.tools}>
      <h2 className={styles.title}>TOOLS</h2>
      <div className={styles.imgdiv}>
        {toolsData.map((tool, index) => (
          <div className={styles.imgContainer} key={index}>
            <img src={tool.logo} alt={`${tool.name} Logo`} className={styles.img} />
            <p className={styles.stack}>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
