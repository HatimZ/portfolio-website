import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'
import About from '../About/about'
import Nav from '../Nav/nav'

const header = () => {
  return (
    <header>
      
        <div className="container header__container">
          
           <div>  <h5>Hi Everyone, I am</h5>
                   <h1>Hatim Zahid</h1>
                  <h5 className="text-light">FullStack Developer</h5>
                  <CTA/> 
                  <About/>
            </div> 

            
         
          <HeaderSocials/>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default header