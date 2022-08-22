import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import Skills from './components/Skills/skills'
import Contact from './components/Contact/contact'
import Experience from './components/Experience/experience'
import Portfolio from './components/Portfolio/portfolio'
import Banner from './components/Banner/Banner'

const App = () => {
  return (
    <>
    <Banner/>
    <Nav/>
    
    <Skills/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    
    
    </>
  )
}

export default App