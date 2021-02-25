import React from 'react';

import Footer from "./Footer";
import { Link } from "react-router-dom";
// import About from "./About";
import "../App.css";






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
                <div className="col-12">
                    <h3 id="descriptionHome">Full Stack Web Developer in Atlanta, GA, always looking for new opportunities to strengthen my skills and create innovative apps.</h3>
                </div>   
            </div> 
            <div className="row">
                <div className="viewMoreBtn col-12">
                    <Link className="viewMore" to="/About">View More... </Link>
                </div>   
            </div> 
            <Footer />
        </div>
    );
};



export default Home;