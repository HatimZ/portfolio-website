import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'


const data_with_demo = [

    {   id: 1,
        image: IMG1 ,
        title: "Portfolio Website with React" ,
        github: 'https://github.com/HatimZ/portfolio-website' ,
        demo: 'https://github.com'

    }
    ,
    {   id: 2,
        image: IMG2 ,
        title: "HR Applicant Tracking System" ,
        github: 'https://github.com/HatimZ/Applicant-Tracking-System' ,
        demo: 'https://github.com/HatimZ/Applicant-Tracking-System'

    },
    {   id: 3,
        image: IMG3 ,
        title: "Data Analysis with R" ,
        github: 'https://github.com/HatimZ/Data-analysis-using-Linear-Algebra-with-R' ,
        demo: 'https://hatimz.github.io/data-analysis/'

    },
]

const data_without_demo = [

    {   id: 4,
        image: IMG4 ,
        title: "Flask Server with MongoDB Backend" ,
        github: 'https://github.com/HatimZ/Flask-Server-with-MongoDB' ,
        

    },
    {   id: 5,
        image: IMG5 ,
        title: "Data Dashboard with Flutter and Dart" ,
        github: 'https://github.com/HatimZ/Flask-Server-with-MongoDB' ,
        

    },
]





const portfolio = () => {
  return (

    <section id = 'portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

    {
        data_with_demo.map(({ id, image, title, github, demo}) => {
           return ( 
           <article key= {id} className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src= {image} alt="" />
            </div>
            <h3> {title} </h3>
            <div className="portfolio__item-cta">
            <a href= {github} className='btn'>Github</a>
            <a href= {demo} className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        )
        }  
        )
    }

    {   data_without_demo.map(({ id, image, title, github, demo}) => {
            return ( 
            <article key= {id} className='portfolio__item'>
             <div className='portfolio__item-image'>
                 <img src= {image} alt="" />
             </div>
             <h3> {title} </h3>
             <div className="portfolio__item-cta">
             <a href= {github} className='btn'>Github</a>
             </div>
         </article>
         )
         }  
         
        )
    }



    </div>
    </section>
  )
}

export default portfolio