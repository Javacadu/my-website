import React from "react";
import "./css/About.css";
import aboutProfile from "../assets/images/about-pfp.jpg";

function About() {
    return (
        <>
            <section>
                <div id="about-main">
                    <div className="about-main-content">
                        <h1 className="about-main-title">Hello!</h1>
                        <img
                            className="pfp-crop"
                            src={aboutProfile}
                            alt="Oops this didn't load..."
                        />
                        <hr className="about-main-linebreak" />
                        
                    </div>
                    
                </div>
                <div id="about-main">
                    <div className="about-main-content, about-main-left">
                        <p>
                            <span>My</span> name is <b>Jacob Atanacio</b>. I am a Data Science student at SJSU(San Jose State University) who is committed to using technology as a means to improve the lives of others.
                        </p>
                        <p>
                            While my primary focus and interest is in data science, I keep an open mind for exploring all fields of tech! My knowledge also expands to full stack development, data structures andalgorithms, and Git.
                        </p>
                    </div>
                    <div className="about-main-right">
                        <p>
                            I love to collaborate in teams, cook, play volleyball, explore new music, and enjoy the satisfaction of solving problems!
                        </p>
                        <p>
                            I've utilized critical thinking and problem-solving in creative outlets through photography and videography.
                        </p>
                    </div>
                </div>
                <div id="about-main">
                    <p>
                        Feel free to check out my{" "} 
                        <a href="/#projects">
                            <b>projects </b>
                        </a>{""}
                        and connect with me {" "} 
                        <a href="/#contact">
                            <b>here</b>
                        </a>{""}
                        !
                    </p>
                </div>
                <div id="about-main" className="about-main-socials">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/javacadu/"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/jacob-atanacio/"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Javacadu"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://open.spotify.com/user/jacob_avocado"
                    >
                        <i className="fa-brands fa-spotify"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="discordapp.com/user/141729611808505856"
                    >
                        <i className="fa-brands fa-discord"></i>
                    </a>
                </div>
            </section>
            <footer style={{marginTop: "50px"}}>
                <div id="footer-info">
                    Designed and Coded by Jacob Atanacio
                </div>
                <div id="copyright">
                    <b>jacobatanacio.com</b>
                </div>
            </footer>
        </>
    );
}

export default About;