import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {GiNotebook} from 'react-icons/gi'
import {MdContactMail} from 'react-icons/md'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const [navState , setActiveState] = useState('#')
  return (
    <nav>
        <a href="#" onClick={ () => setActiveState('#')} className={navState === '#' ? 'active' : ''} ><AiFillHome/></a>
        <a href="#experience" onClick={ () => setActiveState('#experience')} className={navState === '#experience' ? 'active' : ''}><MdWork/></a>
        <a href="#skills" onClick={ () => setActiveState('#skills')} className={navState === '#skills' ? 'active' : ''}><GiNotebook/></a>
        <a href="#contact" onClick={ () => setActiveState('#contact')} className={navState === '#contact' ? 'active' : ''}><MdContactMail/></a>

    </nav>
  )
}

export default Nav