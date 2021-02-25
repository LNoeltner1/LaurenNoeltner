import React from 'react';
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";


const Contact = () => {
    return (
        <div className="mainWrapper">
            <Header />
                <div className="row">
                    <div className="col-1"></div>

                    <h2 className="col-10 pageTitle">
                        Contact Me
                    </h2>
                    <hr />
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="githubLink col-12">
                        <h2> 
                            <a className="contactLinks" href="https://github.com/LNoeltner1">Contact Me on GitHub</a>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="linkedinLink col-12">
                        <h2> 
                            <a className="contactLinks" href="https://www.linkedin.com/in/lauren-noeltner-102b731a0">Contact me via LinkedIn</a>
                        </h2>
                    </div>
                </div>
                
            <Footer />
        </div>
    );
};

export default Contact;