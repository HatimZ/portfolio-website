import React from 'react'
import { BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I have</h5>
      <h2>  My Experience</h2>

       <div className="container experience__container">
          <div className="experience__group">
            <h3>Front End Experience</h3>
            <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div><h4>HTML5</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div><h4>CSS6</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div><h4>React.js</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Flutter and Dart</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div><h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
          </div>

          <div>
          <div className="experience__group">
              <h3>Back End Experience</h3>
              <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div><h4>Django Python</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div><h4>Flask Python</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>


           </div>
           </div>

           
           <div className='experience__group'>
                <h3>Cloud and Operating Systems</h3>
                <div className="experience__content">
                  <article className='experience__details'>
                 <BsPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Amazon Web Service</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                 </article>

                 <article className='experience__details'>
                   <BsPatchCheckFill className='experience__details-icon'/>
                   <div><h4>Linux and Windows</h4>
                   <small className='text-light'>Experienced</small>
                   </div>
                 </article>
               </div>
               </div>
               </div>
         

          </div>
    


          

    




    </section>
  )
}

export default experience