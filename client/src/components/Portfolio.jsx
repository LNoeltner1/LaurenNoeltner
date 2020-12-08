import React from 'react';
import "../App.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
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
        <>
            <div className="mainWrapper">
                <Header />
                
                <div className="row">
                    <div className="col-1"></div>

                    <h2 className="col-10 pageTitle">
                        My Projects
                    </h2>
                    <hr />
                    <div className="col-1"></div>

                </div>
                                
                
                {/* CARD SECTION */}
                <container className="row projectsContainer">
                    <div className="col-xs-0 col-sm-1"></div>
                    <div className="carouselWrapper col-xs-12 col-sm-10">
                        
                    <CardColumns>
                        {/* CARD ONE */}
                        <Card className="individualCard">
                            <Card.Img variant="top" src={GiddyItUp} className="cardImage"/>
                            <Card.Body>
                            <Card.Title className="titleText">GiddyItUp</Card.Title>
                            <Card.Text className="descriptionText">
                                Wild West-themed chore app for young children, who can enlist as 
                                'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                chores around the house in exchange for points. Points can earn 
                                them extra privileges at home, such as a later bedtime, a more 
                                screentime, or whatever the parent can think of!
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1/GiddyItUp">GitHub Repository</a>
                            <a className="liveLink" href="https://giddyitup-eg.herokuapp.com/">Visit Live Project!</a>
                            </Card.Body>
                        </Card>
                        {/* CARD TWO */}
                        <Card className="individualCard">
                            <Card.Img variant="top" src={Workout} className="cardImage"/>
                            <Card.Body>
                            <Card.Title className="titleText">Workout Tracker</Card.Title>
                            <Card.Text className="descriptionText">
                                Workout tracker app with a MySQL database to save the users' workouts. 
                                The user can input workouts by type and other factors such as time 
                                and distance, and view several graphical summaries of their workouts 
                                over time. 
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1/workout_tracker">GitHub Repository</a>
                            <a className="liveLink" href="https://workout-tracker-3.herokuapp.com/">Visit Live Project!</a>
                            </Card.Body>
                        </Card>
                        {/* CARD THREE */}
                        <Card className="individualCard">
                            <Card.Img variant="top" src={Cryptic} className="cardImage"/>
                            <Card.Body>
                            <Card.Title className="titleText">Cryptic Encounters</Card.Title>
                            <Card.Text className="descriptionText">
                                A delightfully spooky haunted house walk through game with interactive dialogue 
                                and varying content. The player finds themselves trapped in 
                                a haunted house, populated by a group of not-so-mean ghosts.
                                They must interact with all of these ghosts to escape the house, 
                                and have the option of choosing positive or negative interactions
                                with corresponding responses from the spirits.
                                Made using a persona generator API, a backend 
                                MongoDB database and Handlebars.
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1/cryptic-encounters">GitHub Repository</a>
                            <a className="liveLink" href="https://cryptic-encounter.herokuapp.com">Visit Live Project!</a>
                            </Card.Body>
                        </Card>
                        {/* CARD FOUR */}
                        <Card className="individualCard">
                            <Card.Img variant="top" src={TeamGenerator} className="cardImage"/>
                            <Card.Body>
                            <Card.Title className="titleText">Employee Summary Template Generator CLI</Card.Title>
                            <Card.Text className="descriptionText">
                                A CLI app for generating a page that shows all employees in an organized 
                                way. The user can input name, title and other factors depending on their title.
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1/Employee_Summary_Template_Engine">GitHub Repository</a>
                            </Card.Body>
                        </Card>
                        {/* CARD FIVE */}
                        <Card className="individualCard">
                            <Card.Img variant="top" src={Password} className="cardImage"/>
                            <Card.Body>
                            <Card.Title className="titleText">Random Password Generator</Card.Title>
                            <Card.Text className="descriptionText">
                                A random password generator app with the option to use or 
                                not use different character types. The user can specify the 
                                length and the types of characters they want to include in their password.
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1/Random_Password_Generator_App">GitHub Repository</a>
                            <a className="liveLink" href="https://lnoeltner1.github.io/Random_Password_Generator_App/">Visit Live Project!</a>
                            </Card.Body>
                        </Card>
                        {/* CARD SIX */}
                        <Card className="individualCard">
                            <Card.Img variant="top" src={Budget} className="cardImage"/>
                            <Card.Body>
                            <Card.Title className="titleText">Budget Tracker</Card.Title>
                            <Card.Text className="descriptionText">
                                Online/offline budget tracker using a 
                                local database to store user information over sessions.
                                The user can input and view a list of expenses and spending over time, 
                                and can even view a graph of their spending over the lifespan of the local database.
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1/budget-tracker">GitHub Repository</a>
                            <a className="liveLink" href="https://budget-tracker-lnoeltner.herokuapp.com/">Visit Live Project!</a>
                            </Card.Body>
                        </Card>
                        
                        
                        {/* CARD SEVEN */}
                        <Card className="individualCard">
                            <Card.Img variant="top" src={Readme} className="cardImage"/>
                            <Card.Body>
                            <Card.Title className="titleText">CLI ReadME Generator</Card.Title>
                            <Card.Text className="descriptionText">
                            A CLI README generator node app that will prompt
                            the user for information about their project and generate a markdown page upon completion.
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1/README_Generator">GitHub Repository</a>
                            </Card.Body>
                        </Card>
                        
                    </CardColumns>
                    </div>
                    <div className="col-xs-0 col-sm-1"></div>
        
                </container>
                
            </div>
            
            </>
    );
};



export default Portfolio;