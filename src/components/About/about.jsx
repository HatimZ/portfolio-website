import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
import './about_hatim.css'

const About = () => {
  return (
   
        <div className="about__container">
            {/* <div className="about__me">
              <div className="about__me-image">
                  <img src= {ME} alt="About Image" />
             </div>

            </div> */}
          <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <FaAward  className='about__icon'/>
                   <h5>Work Experience</h5>
                  <small>1+ Year Experience</small>
                </article>
                <article className='about__card'>
                  <FiUsers  className='about__icon'/>
                  <h5>Research Experience</h5>
                  <small>Bilkent University</small>
                </article>
              <article className='about__card'>
                 <VscFolderLibrary  className='about__icon'/>
                 <h5>Projects</h5>
                 <small>5+</small>
              </article>
            
            </div>
            <p className='summary'>
              An experienced fullstack developer working with Django (Python) and React.js. Developing on Linux and Amazn Web Services. Developed several APIs and databases.
            </p>
           

          </div>
         
        </div>



    
  )
}

export default About