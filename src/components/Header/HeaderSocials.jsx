import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FaMedium} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'
import { SiUpwork } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
             <a href="https://www.linkedin.com/in/hatim-zahid/" target="_blank"><SiUpwork size={23} /></a>

       <a href="https://www.upwork.com/freelancers/~015dba6905ee11ad1a" target="_blank"><BsLinkedin size={23} /></a>
        <a href="https://www.linkedin.com/in/hatim-zahid/" target="_blank"><BsLinkedin size={23} /></a>
        <a href="https://github.com/HatimZ" target="_blank"><AiFillGithub size={23}/></a>
        <a href="https://medium.com/@hatim.zahid"target="_blank" ><FaMedium size={23}/></a>
        <a href="https://stackoverflow.com/users/17984799/hatim-zahid"target="_blank" ><BsStackOverflow size={23}/></a>
    </div>
  )
}

export default HeaderSocials
