import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import "../App.css";
import LaurenIMG from "../Images/IMG_0575_83501212705938.JPG";


const About = () => {
    return (
        <>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="pageTitle">
                            About Me
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <img alt="Lauren Noeltner" className="profileImg" src={LaurenIMG} />
                    </div>
                    <div className="col-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea rem ex delectus facilis itaque blanditiis, 
                            at cumque a assumenda amet necessitatibus nulla, beatae natus, aperiam illo expedita nam mollitia!
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;