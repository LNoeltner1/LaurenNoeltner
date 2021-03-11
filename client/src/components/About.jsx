import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import "../App.css";
import LaurenIMG from "../Images/IMG_0575_83501212705938.JPG";
// import texture from "../Images/paintTexture.jpeg";


const About = () => {
    return (
        <div className="mainWrapper">
            <Header />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h2 className="pageTitle">
                        About Me
                    </h2>
                </div>
                <div className="col-1"></div>

            </div>
            <hr />
            <div className="row">
                <div className="col-sm-1"></div>

                <div className="col-xs-12 col-sm-12 col-md-3">
                    <img alt="Lauren Noeltner" className="profileImg" src={LaurenIMG} />
                </div>
                <div className="col-xs-1 col-sm-0 col-md-0"></div>
                <div id="bioText" className="col-xs-11 col-sm-11 col-md-7">
                    <p>
                        I am a full-stack developer currently based in Atlanta,
                        Georgia. I have always had a wide range of interests, from fine
                        arts to the sciences, and I have been lucky to get a chance to
                        explore most of them at some point in my life.
                    </p>
                    <p>
                        My interests in technology, psychology, music, history, literature and medicine motivate me to 
                        incorporate my eclectic knowledge into to my work as a programmer. 
                    </p>
                    
                    <p>
                        Since college, I have continued to enjoy learning independently, and,
                        in my spare time, I am almost always researching whatever fascinates
                        me in that moment. I love learning about history, language, animals,
                        the arts, space, computers and technology. I am currently teaching
                        myself German after becoming mostly fluent in Spanish in college.
                        When I am not researching interesting information, you could find me
                        watching movies, playing games, playing with my dogs, or
                        painting/making something.
                    </p>
                    <p>
                        I graduated from the Georgia Tech Full Stack Web Development Bootcamp,
                        and I absolutely loved the opportunity to strengthen my skills as
                        a developer in an environment with other budding developers. 
                        See my portfolio for some of my completed projects from inside and outside of class!
                    </p>
                </div>
                {/* <div className="col-xs-1 col-sm-1"></div> */}

            </div>
            <Footer />
        </div>
    );
};

export default About;