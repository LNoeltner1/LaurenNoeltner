import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";


class Header extends Component { 
    render() {
        return (
            <div className="row" id="navbarContainer">
                

                <div className="col-md-11">
                    <Navbar>
                        <NavLink id="homeBtn" to="/">Lauren Noeltner</NavLink>
                        <NavLink id="aboutBtn" to="/About">About Me</NavLink>
                        <NavLink id="portfolioBtn" to="/Portfolio">My Projects</NavLink>
                        <NavLink id="contactBtn" to="/Contact">Contact Me</NavLink>
                    </Navbar>
                </div>
                

            </div>
        );
    }
}

export default Header;