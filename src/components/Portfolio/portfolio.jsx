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
        title: "INSIGHT CARE - Web App" ,
        description : "Claims Management Application",
        skills: ["Django", "Vue.js", "Bootstrap", "jQuery", "MongoDB", "CSS", "HTML", "UI", "UX"],
        company :  "VST Inc"  ,
      

    },
    {   id: 2,
        image: IMG1 ,
        title: "DarkHorse - Mobile App" ,
        description : "Sports Betting",

        skills: ["Django", "Flutter", "AWS Lambda", "GitHub Actions", "MongoDB"],
        company :  "BlackSwan"  ,
        

    },
    {   id: 3,
        image: IMG1 ,
        title: "Key2 Portal" ,
        description : "Chat and User Management",

        skills :  ["Django" ,  "React.js" ,  "Redux" , " PostgreSQL"]        ,
        company :  "Key 2 Communications"  ,
      

    },

    {   id: 4,
        image: IMG1 ,
        title: "Portfolio Website with React.js and CSS" ,
        skills: ["React.js", "CSS", "HTML", "UI", "UX"],
        company :  "Portfolio"  ,
        github: 'https://github.com/HatimZ/portfolio-website' ,
        demo: 'https://hatimz.github.io/portfolio-website/'

    }
    ,
    {   id: 5,
        image: IMG3 ,
        skills: ["Python", "R", "Linear Algebra", "Data Science"],
        company :  "Bilkent Univeristy"  ,
        title: "Exploratory and Statistical Data Analysis with R" ,
        github: 'https://github.com/HatimZ/Data-analysis-using-Linear-Algebra-with-R' ,
        demo: ' https://hatimz.github.io/Data-analysis-using-Linear-Algebra-with-R/'

    },
    
    {   id: 6,
        image: IMG4 ,
        skills: ["Flask", "MongoDB", "HTML", "CSS"],
        company :  "Portfolio"  ,
        title: "Flask Server with MongoDB Backend" ,
        github: 'https://github.com/HatimZ/Flask-Server-with-MongoDB' ,
        

    },
    {   id: 7,
        image: IMG5 ,
        skills: ["Django", "CSS", "HTML"],
        company :  "Portfolio"  ,
        title: "HR Applicant Tracking System with Django" ,
        github: 'https://github.com/HatimZ/Applicant-Tracking-System' ,
        

    },
    {   id: 8,
        image: IMG2 ,
        skills: ["Flutter", "Java", "Cubit", "BloC", "UX"],
        company :  "Portfolio"  ,
        title: "Student Data live Dashboard with Flutter/Dart" ,
        github: 'https://www.linkedin.com/feed/update/urn:li:activity:6949388338290126848/' ,

    },
]







const portfolio = () => {
    return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Full Stack Portfolio</h2>
  
        <div className="container portfolio__container">
          {data_with_demo.map(({ id, image, title,description,  github, demo, skills, company,  }) => (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image' style={{ marginBottom: "20px" }}>
                <img src={image} alt="" width="400" height="200" />
              </div>
              <h4>{title}</h4>
              <h4>{description}</h4>
              <h4>{company}</h4>
              <div className="skills">
                {Array.isArray(skills) ? skills.map((skill, index) => (
                  <span key={index} className="skill-chip">{skill}</span>
                )) : <span>{skills}</span>}
              </div>
              <div className="portfolio__item-cta" style={{ paddingTop: "20px" }}>
                {github && <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>}
                {demo && <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

export default portfolio