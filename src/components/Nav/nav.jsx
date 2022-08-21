import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {GiNotebook} from 'react-icons/gi'
import {MdContactMail} from 'react-icons/md'
import {SiBookstack} from 'react-icons/si'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const [navState , setActiveState] = useState('#')
  return (
    <div className="nav-bar">
    <nav>
        <a href="#" onClick={ () => setActiveState('#')} className={navState === '#' ? 'active' : ''} ><AiFillHome/></a>
        <a href="#skills" onClick={ () => setActiveState('#experience')} className={navState === '#experience' ? 'active' : ''}><MdWork/></a>
        <a href="#experience" onClick={ () => setActiveState('#skills')} className={navState === '#skills' ? 'active' : ''}><GiNotebook/></a>
        <a href="#portfolio" onClick={ () => setActiveState('#portfolio')} className={navState === '#portfolio' ? 'active' : ''}><SiBookstack/></a>
        <a href="#contact" onClick={ () => setActiveState('#contact')} className={navState === '#contact' ? 'active' : ''}><MdContactMail/></a>

    </nav>
    </div>
  )
}

export default Nav