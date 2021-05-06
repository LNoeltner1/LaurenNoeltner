// import Router from "express";
import React, { Component } from "react";
// import Router from "react-router";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
        
            <div>
                <nav class="navbar navbar-light bg-light">
                    <NavLink to="/" activeClassName="selected" id="myName">Lauren Noeltner</NavLink>
                    
                    <NavLink to="/About" className="headBtn" activeClassName="selected">About</NavLink>
                    <NavLink to="/Portfolio" className="headBtn" activeClassName="selected">Portfolio</NavLink>
                    <NavLink to="/Contact" className="headBtn" activeClassName="selected">Contact</NavLink>

                    
                </nav>
            </div>

        );
    }
}

export default Header;

