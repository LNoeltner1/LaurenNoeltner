import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";


class Header extends Component { 
    render() {
        return (
            <div className="row" id="navbarContainer">
                <div className="col-md-12">
                    <Navbar>
                        <NavLink id="homeBtn" to="/" activeClassName="selected">Lauren Noeltner</NavLink>
                        <NavLink id="aboutBtn" to="/About" activeClassName="selected">About Me</NavLink>
                        <NavLink id="portfolioBtn" to="/Portfolio" activeClassName="selected">My Projects</NavLink>
                        <NavLink id="contactBtn" to="/Contact" activeClassName="selected">Contact Me</NavLink>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Header;