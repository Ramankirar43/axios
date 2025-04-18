// import styles from './App.module.css';
// import { Navbar } from './components/Navbar/Navbar';
// import {Hero} from './components/Hero/Hero';
// import {About} from './components/About/About';
// import {Tools} from './components/Tools/Tools';
// import {Experience} from './components/Experience/Experience';
// import{Projects} from './components/Projects/Projects';
// import {Contact} from'./components/Contact/Contact';
// import {Login} from './pages/Login';
// function App(){
//   return (
//     <div className={styles.App}>
//     <Navbar></Navbar>  
//     <Hero/> 
//     <About/>
//     <Tools/>
//     <Experience/>
//     <Projects/>
//     <Contact/>
//     </div>
    
//   );
// }
// export default App;


import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Tools } from './components/Tools/Tools';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import {Team} from './components/Team/Team'
import { Resources } from './components/Resources/Resources';
import { Login } from './pages/Login';
 import { Signup } from './pages/Signup';
 import { Gallery } from "./components/Gallery/Gallery";
 import { Comingsoon } from "./pages/comingsoon";
import{Community} from './components/Community/Community';
function App() {
  return (
    <div className={styles.App}>
      <Router>
      

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />

                <About />
                <Resources/>
                <Projects />
                <Team />
                <Gallery/>
               
                {/* <Tools /> */}
                {/* <Experience /> */}
               {/* <Community /> */}
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} /> 
           <Route path="/comingsoon" element={<Comingsoon />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

