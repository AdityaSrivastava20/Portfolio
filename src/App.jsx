import React , { useEffect }from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Aos from "aos"
import "aos/dist/aos.css"
import About from "./components/About"


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
        <Contact />
      </div>
    </>   
  )
}

export default App
