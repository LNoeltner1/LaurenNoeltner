import React from 'react';
import Header from "./Header";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import About from "./About";
import "../App.css";






const Home = () => {
    return (
        <div>
            <Header />
            <h1 id="homeLauren">Lauren Noeltner</h1>
            <h3 id="descriptionHome">I am a Full Stack web Developer in Atlanta, GA, always looking for new opportunities to strengthen my skills and create innovative apps</h3>
            <Link id="viewMoreBtn" to="/About">View More... </Link>
        </div>
    );
};



export default Home;