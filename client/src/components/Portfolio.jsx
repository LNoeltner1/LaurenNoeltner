import React from 'react';
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";


const Portfolio = () => {
    return (
        <div>
            <Header />
            <container>
                <div className="row">
                    <div className="col-1"></div>

                    <h2 className="col-10 pageTitle">
                        My Projects
                    </h2>
                    <hr />
                    <div className="col-1"></div>

                </div>
                
            </container>
            <Footer />
        </div>
    );
};



export default Portfolio;