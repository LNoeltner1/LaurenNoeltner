import React from 'react';
import Header from "./Header";
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import About from "./About";





const Home = () => {
    return (
        <div>
            <Header />
            <h1 id="homeLauren">Lauren Noeltner</h1>
            <h3>I am a Full Stack web Developer in Atlanta, GA, always looking for new opportunities to strengthen my skills and create innovative apps</h3>
            <NavLink id="aboutBtn" to="/About" activeClassName="selected">View More... </NavLink>
        </div>
    );
};



export default Home;