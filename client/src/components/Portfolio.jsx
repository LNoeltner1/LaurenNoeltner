import React from 'react';
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel';
import GiddyItUp from "../Images/GiddyItUp_screenshot.png";
import Cryptic from "../Images/cryptic_encounters_screenshot.png";
import Budget from "../Images/budget_tracker_screenshot.png";
import Workout from "../Images/workout_screenshot_charts.png";
import TeamGenerator from "../Images/teamgeneratorthumbnail.png";
import Password from "../Images/03-javascript-homework-demo.png";
import Readme from "../Images/Screenshot.png";




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
                                            A delightfully spooky haunted house walk through game with interactive dialogue 
                                            and varying content. The player finds themselves trapped in 
                                            a haunted house, populated by a group of not-so-mean ghosts.
                                            They must interact with all of these ghosts to escape the house, 
                                            and have the option of choosing positive or negative interactions
                                            with corresponding responses from the spirits.
                                            Made using a persona generator API, a backend 
                                            MongoDB database and Handlebars.
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={Cryptic}
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
                                        
                                        <h3 className="titleText">Budget Tracker</h3>
                                        <p className="descriptionText">
                                            Online/offline budget tracker using a 
                                            local database to store user information over sessions.
                                            The user can input and view a list of expenses and spending over time, 
                                            and can even view a graph of their spending over the lifespan of the local database.
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={Budget}
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
                                        
                                        <h3 className="titleText">Workout Tracker</h3>
                                        <p className="descriptionText">
                                            Workout tracker app with a MySQL database to save their workouts. 
                                            The user can input workouts by type and other factors such as time 
                                            and distance, and view several graphical summaries of their workouts 
                                            over time. 
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={Workout}
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
                                        
                                        <h3 className="titleText">Employee Team Generator CLI</h3>
                                        <p className="descriptionText">
                                            A CLI app for generating a page that shows all employees in an organized 
                                            way. The user can input name, title and other factors depending on their title.
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={TeamGenerator}
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
                                        
                                        <h3 className="titleText">Random Password Generator</h3>
                                        <p className="descriptionText">
                                            A random password generator app with the option to use or 
                                            not use different character types. The user can specify the 
                                            length and the types of characters they want to include in their password.
                                        </p>
                                    </div> 
                                    <div className="col-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img
                                        className="carouselItem d-block w-100"
                                        src={Password}
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
                                        src={Readme}
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