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
                    <div className="col-12">
                        <div className="contactLinks">
                            
                            <a className="githubLink" href="https://github.com/LNoeltner1">Contact Me on GitHub</a>
                            <a className="linkedinLink" href="https://www.linkedin.com/in/lauren-noeltner-102b731a0">Contact Me on LinkedIn</a>
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