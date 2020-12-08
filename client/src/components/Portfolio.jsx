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
                                
                
                {/* CAROUSEL */}
                <container className="row carouselContainer">
                    <div className="col-xs-0 col-sm-1"></div>
                    <div className="carouselWrapper col-xs-12 col-sm-10">
                        
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src={GiddyItUp} />
                            <Card.Body>
                            <Card.Title>GiddyItUp</Card.Title>
                            <Card.Text>
                                Wild West-themed chore app for young children, who can enlist as 
                                'Deputies' to their parents (the 'Sheriffs') and complete extra 
                                chores around the house in exchange for points. Points can earn 
                                them extra privileges at home, such as a later bedtime, a more 
                                screentime, or whatever the parent can think of!
                            </Card.Text>
                            <a className="repoLink" href="https://github.com/LNoeltner1">GitHub Repository</a>
                            <a className="liveLink" href="https://github.com/LNoeltner1">Visit Live Project!</a>
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