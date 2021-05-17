import React from 'react';

import Footer from "./Footer";
import { Link } from "react-router-dom";
// import About from "./About";
import "../App.css";
import Resume from "../Images/Resume_LaurenNoeltner.pdf";






const Home = () => {
    return (
        <div className="mainWrapper">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1 id="homeLauren">Lauren Noeltner</h1>
                </div>    
                <div className="col-1"></div>
            </div> 
            <hr></hr>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h3 id="descriptionHome">Full Stack Web Developer in Atlanta, GA, always looking for new opportunities to strengthen my skills and contribute to innovative applications.</h3>
                </div>
                <div className="col-1"></div>   
            </div> 
            <br />
            <div className="row">
                <div className="viewMoreBtns col-12">
                    <Link className="homeNav" to="/About">About Me</Link>
                    <Link className="homeNav" to="/Portfolio">Portfolio</Link>
                    <Link className="homeNav" to="/Contact">Contact Me</Link>
                     
                </div>
                
            </div> 
            <br />
            <br />
            <div className="row" id="resumeBtn">
                <div className="viewMoreBtns col-12">
                    <a className="homeNav"  href={Resume} target="_blank">View My Resume</a>
                </div>
                
            </div>  
            <Footer />
        </div>
    );
};



export default Home;