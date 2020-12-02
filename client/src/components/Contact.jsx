import React from 'react';
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div>
            <Header />
            <container>
                <div className="row">
                    <div className="col-1"></div>

                    <h2 className="col-10 pageTitle">
                        Contact Me
                    </h2>
                    <hr />
                    <div className="col-1"></div>

                </div>
                
            </container>
            <Footer />
        </div>
    );
};

export default Contact;