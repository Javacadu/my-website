import React from "react";
//import navLogoBlack from "../../assets/images/portfolio_logo_black.svg";
//import navLogoWhite from "../../assets/images/portfolio_logo_white.svg";
import "./index.css";

export default function NavBar() {

    //const [menu, toggleMenu] =  useState(false);
   // const onClick = () => toggleMenu(!menu);

    return (
        <div id="navbar-container" className="center width-size">
            <nav id="navbar-contents">
                <ul key="About">
                    <a href="/#about">
                        About
                    </a>
                </ul>
                <ul key="Contact">
                    <a href="/#contact">
                        Contact
                    </a>
                </ul>
                <ul key="Home">
                    <a href="/#">
                        Home
                    </a>
                </ul>
                <ul key="Resume">
                    <a href="/#resume">
                        Resume
                    </a>
                </ul>
                <ul key="Projects">
                    <a href="/#projects">
                        Projects
                    </a>
                </ul>
            </nav> 

            <nav></nav>
        </div>
    );
}