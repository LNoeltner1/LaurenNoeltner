import React, { Component, useEffect, useState } from 'react';
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import githubLogo from "../Images/logos/githubLogo.png";
import linkedinLogo from "../Images/logos/linkedinLogo.png";


const Contact = () => {
    const[isShown, setTextShow] = useState(false);

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
                    <div className="col-12">
                        <div className="contactLinks">
                            
                            <a id="github" className="githubLink" href="https://github.com/LNoeltner1"
                            onMouseEnter={() => setTextShow(true)}
                            onMouseLeave={() => setTextShow(false)}>
                                <img className="contactLogos" src={githubLogo} alt="github logo" aria="Contact Me on GitHub!"></img>
                            </a>
                            {isShown && (
                                <p>Contact Me on GitHub!</p>
                            )}
                            <a id="linkedin" className="linkedinLink" href="https://www.linkedin.com/in/lauren-noeltner-102b731a0">
                                <img className="contactLogos" src={linkedinLogo} alt="linkedIn logo" aria="Contact Me on LinkedIn"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                </div>
                {/* add CODEPEN, HACKERRANK */}
                {/* Add CONTACT FORM */}
            <Footer />
        </div>
    );
};

export default Contact;