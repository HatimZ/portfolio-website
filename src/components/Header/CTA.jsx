import React from 'react'
import CV from '../../assets/HatimZahid_CV_Software_Engineer.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV}  className= 'btn' download>DownLoad CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA