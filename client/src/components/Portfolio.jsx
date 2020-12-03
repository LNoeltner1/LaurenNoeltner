import React from 'react';
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel';
import GiddyItUp from "../Images/GiddyItUp_screenshot.png";
import Cryptic from "../Images/cryptic_encounters_screenshot.png";
import Budget from "../Images/budget_tracker_screenshot.png";



const Portfolio = () => {
    return (
        <div className="mainWrapper">
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
            {/* CAROUSEL */}
            <container className="row carouselContainer">
                <div className="col-xs-0 col-sm-1"></div>
                <div className="carouselWrapper col-xs-12 col-sm-10">
                    <Carousel>
                        {/* ITEM 1 */}
                        <Carousel.Item interval={15000}>
                            
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        
                                        <h3 className="titleText">GiddyItUp</h3>
                                        <p className="descriptionText">
                                            Wild West-themed chore app for young children, who can enlist as 
                                            'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                            chores around the house in exchange for points. Points can earn 
                                            them extra privileges at home, such as a later bedtime, a more 
                                            screentime, or whatever the parent can think of!
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={GiddyItUp}
                                        alt="First slide"
                                        />
                                    </div>
                                </div>
                                
                        </Carousel.Item>
                        {/* ITEM 2 */}
                        <Carousel.Item interval={15000}>
                            
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        
                                        <h3 className="titleText">Cryptic Encounters</h3>
                                        <p className="descriptionText">
                                            Wild West-themed chore app for young children, who can enlist as 
                                            'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                            chores around the house in exchange for points. Points can earn 
                                            them extra privileges at home, such as a later bedtime, a more 
                                            screentime, or whatever the parent can think of!
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={GiddyItUp}
                                        alt="First slide"
                                        />
                                    </div>
                                </div>
                                
                        </Carousel.Item>
                        {/* ITEM 3 */}
                        <Carousel.Item interval={15000}>
                            
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        
                                        <h3 className="titleText">GiddyItUp</h3>
                                        <p className="descriptionText">
                                            Wild West-themed chore app for young children, who can enlist as 
                                            'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                            chores around the house in exchange for points. Points can earn 
                                            them extra privileges at home, such as a later bedtime, a more 
                                            screentime, or whatever the parent can think of!
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={GiddyItUp}
                                        alt="First slide"
                                        />
                                    </div>
                                </div>
                                
                        </Carousel.Item>
                        {/* ITEM 4 */}
                        <Carousel.Item interval={15000}>
                            
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        
                                        <h3 className="titleText">GiddyItUp</h3>
                                        <p className="descriptionText">
                                            Wild West-themed chore app for young children, who can enlist as 
                                            'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                            chores around the house in exchange for points. Points can earn 
                                            them extra privileges at home, such as a later bedtime, a more 
                                            screentime, or whatever the parent can think of!
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={GiddyItUp}
                                        alt="First slide"
                                        />
                                    </div>
                                </div>
                                
                        </Carousel.Item>
                        {/* ITEM 5 */}
                        <Carousel.Item interval={15000}>
                            
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        
                                        <h3 className="titleText">GiddyItUp</h3>
                                        <p className="descriptionText">
                                            Wild West-themed chore app for young children, who can enlist as 
                                            'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                            chores around the house in exchange for points. Points can earn 
                                            them extra privileges at home, such as a later bedtime, a more 
                                            screentime, or whatever the parent can think of!
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={GiddyItUp}
                                        alt="First slide"
                                        />
                                    </div>
                                </div>
                                
                        </Carousel.Item>
                        {/* ITEM 6 */}
                        <Carousel.Item interval={15000}>
                            
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        
                                        <h3 className="titleText">GiddyItUp</h3>
                                        <p className="descriptionText">
                                            Wild West-themed chore app for young children, who can enlist as 
                                            'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                            chores around the house in exchange for points. Points can earn 
                                            them extra privileges at home, such as a later bedtime, a more 
                                            screentime, or whatever the parent can think of!
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={GiddyItUp}
                                        alt="First slide"
                                        />
                                    </div>
                                </div>
                                
                        </Carousel.Item>
                        {/* ITEM 7 */}
                        <Carousel.Item interval={15000}>
                            
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        
                                        <h3 className="titleText">GiddyItUp</h3>
                                        <p className="descriptionText">
                                            Wild West-themed chore app for young children, who can enlist as 
                                            'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                            chores around the house in exchange for points. Points can earn 
                                            them extra privileges at home, such as a later bedtime, a more 
                                            screentime, or whatever the parent can think of!
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={GiddyItUp}
                                        alt="First slide"
                                        />
                                    </div>
                                </div>
                                
                        </Carousel.Item>
                




                    </Carousel>
                </div>
                <div className="col-xs-0 col-sm-1"></div>
    
            </container>
            <Footer />
        </div>
    );
};



export default Portfolio;