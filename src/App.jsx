import { useState } from 'react'
import Home from './sections/Home.jsx';
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
