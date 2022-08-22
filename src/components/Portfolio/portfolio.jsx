import React from 'react'
import IMG1 from '../../assets/react-portfolio.PNG'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/flask-server.PNG'
import IMG5 from '../../assets/CIF.PNG'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'


const data_with_demo = [

    {   id: 1,
        image: IMG1 ,
        title: "Portfolio Website with React.js and CSS" ,
        github: 'https://github.com/HatimZ/portfolio-website' ,
        demo: 'https://hatimz.github.io/portfolio-website/'

    }
    ,
    {   id: 3,
        image: IMG3 ,
        title: "Exploratory and Statistical Data Analysis with R" ,
        github: 'https://github.com/HatimZ/Data-analysis-using-Linear-Algebra-with-R' ,
        demo: ' https://hatimz.github.io/Data-analysis-using-Linear-Algebra-with-R/'

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
        title: "HR Applicant Tracking System with Django" ,
        github: 'https://github.com/HatimZ/Applicant-Tracking-System' ,
        

    },
    {   id: 2,
        image: IMG2 ,
        title: "Student Data live Dashboard with Flutter/Dart" ,
        github: 'https://www.linkedin.com/feed/update/urn:li:activity:6949388338290126848/' ,

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
                <img src= {image} alt="" width="400" height="200"/>
            </div>
            <h3> {title} </h3>
            <div className="portfolio__item-cta">
            <a href= {github} className='btn' target= "_blank">Github</a>
            <a href= {demo} className='btn btn-primary' target= "_blank">Live Demo</a>
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
                 <img src= {image} alt="" width="400" height="200"/>
             </div>
             <h3> {title} </h3>
             <div className="portfolio__item-cta">
             <a href= {github} className='btn' target= "_blank">{ id ==2 ? "LinkedIn" : "Github"}</a>
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