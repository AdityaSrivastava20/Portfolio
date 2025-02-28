import React , { useEffect }from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Aos from "aos"
import "aos/dist/aos.css"
import About from "./components/About"
import Certificate from "./components/Certificate"
import { Analytics } from "@vercel/analytics/react"


function App() {

  useEffect(() => {
    Aos.init();
    
   }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Skills />
        <Project />
        <Certificate />
        <Contact />
        
      </div>
      <Analytics />
    </>   
  )
}

export default App
