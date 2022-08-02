import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FaMedium} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin size={18} />LinkedIn</a>
        <a href="https://github.com" target="_blank"><AiFillGithub size={18}/>Github</a>
        <a href="https://medium.com"target="_blank" ><FaMedium size={18}/>Medium</a>
        <a href="https://stackoverflow.com"target="_blank" ><BsStackOverflow size={18}/>StackOverflow</a>
    </div>
  )
}

export default HeaderSocials