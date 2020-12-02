import React from 'react';
import Navbar from './Header';
import Footer from "./Footer";
import "../App.css";


const About = () => {
    return (
        <div>
            <Navbar />
            <container>
                <div className="row">
                    <h2 className="pageTitle">
                        About Me
                    </h2>
                </div>
            </container>
            <div className="row">
                <div className="col-4">
                    IMAGE OF ME
                </div>
                <div className="col-8">
                    BIOGRAPHY OF ME
                </div>
            </div>
            <Footer />
            
        </div>
    );
};

export default About;