import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Exprience from './Component/Exprience';
import Skill from './Component/Skill';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Navbar />
      <div className='container'>
        <Home />
        <Exprience />
        <Skill />
        <Project />
        <Contact />
      </div>

    </>
  );
}

export default App;
