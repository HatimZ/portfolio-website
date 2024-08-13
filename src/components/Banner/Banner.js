import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import CTA from './../Header/CTA';
import headerImg from './../../assets/header-img.svg';
import TrackVisibility from 'react-on-screen';
import Slider from 'react-slick';
import './banner.css';
import HeaderSocials from '../Header/HeaderSocials';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import userImg from "./../../assets/anonymous.png";


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;
    const reviews = [
      {
          image: 'path/to/image1.jpg',
          review: ' \"Hatim is an excellent engineer with strong communication skills. He has been a pleasure to work with and has interfaced well with our team, we look forward to keeping him around for the long run and strongly recommend him to anyone looking to add a dedicated, punctual, and capable engineer to their roster!\"',
          rating: 5,
          date: "Feb 4, 2024 - Present" ,
          project: "DarkHorse - Sports Betting Redefined | United States",
          reviewer : "Aditya Parashar , CEO",
      },
      {
          image: 'path/to/image2.jpg',
          review: '\"Hatim has worked on multiple projects under my supervision. He is very talented ,his speed of learning new skills and asking intuitive questions to fast forward development is commendable. He is going to shine wherever he works.\"',
          rating: 5,
          date: "Feb, 2023" ,
          project: "QuickStart Inc | Karachi Pakistan",
          reviewer : "Sheikh Abdul Wahid, Engineering Manager",
      },
      {
          image: 'path/to/image3.jpg',
          review: '\"Hatim did a great job on performing various web app development-related coding tasks on Amazon Web Services. We\'d be happy to work with this freelancer again.\"',
          rating: 5,
          date: "Oct, 2023" ,
          project: "Confidential - Talent Network | United States",
          reviewer : "Laura C",
      },
      {
        image: 'path/to/image3.jpg',
        review: '\"Hatim understands the business very well and takes part to develop best practices. His work delivery is always on time and his work quality is great and consistent\"',
        rating: 5,
        date: "June 4, 2024 - Present" ,
        project: "Key2 Communications | Canada",
        reviewer : "Sean Paul",
    }
  ];
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = reviews.length;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      arrows: false, // Disable the Previous/Next buttons
      dots: true,   // Disable the dots at the bottom
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlide(newIndex + 1); // Slick index starts at 0, so add 1 for display
    },
  };

   

 

    return (
        <section className="banner" id="home">
           
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Hello Everyone! Welcome to my Portfolio.</span>
                                <h1>{`I'm Hatim Zahid`} </h1>
                                <h2>FullStack Developer</h2>
                                <h3>VST Inc - Remote - Houston, Texas</h3>
                                <HeaderSocials />
                                <p>3+ year experienced software developer working with Django (Python), FastAPI , Vue.js, React.js HTML ,CSS and Flutter. Developing on Linux and Amazon Web Services. Building amazing projects and sharing knowledge through blogging!</p>
                                <CTA />
                            </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>


         


                <Slider {...settings} className='slide'>
                        {reviews.map((review, index) => (
                            <div key={index} className="carousel-slide" style = {{ }}>
                                <p  style = {{ fontStyle : "italic"}}>{review.review}  </p>
                                
                                <div className="rating">
                                    {Array(review.rating).fill().map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))} 
                                    <span> 5.0</span> |   <span>{review.date}  </span>
                                </div>
                                    
                                    <div style={{height : "10px"}}></div>

                                <div style={{display :"flex" }}>
                                  {/* <img src={userImg} alt={`Slide ${index}`} style = {{ height : 20 , width : 20}}/> */}
                                  <h3>{review.reviewer}</h3>
                                </div>
                                <h4>{review.project}  </h4>
                                
                                



                             
                            </div>
                        ))}
                    </Slider>
                    <div className="slide-number" style={{display :"flex" , justifyContent : "center"}}>
                 {currentSlide} of {totalSlides}
            </div>
                    
                    {/* <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img" />
                            </div>}
                    </TrackVisibility> */}
                   
                </Col>
            
        </section>
    )
}

export default Banner;
