import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Achievements from './components/achievement/Achievements'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App