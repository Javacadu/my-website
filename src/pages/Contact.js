import React, { useState } from "react";
import "./css/Contact.css";



function Contact() {
    const [copied, setCopied] = useState('');

    const handleCopyClick = (text, label) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            setCopied(label);
            setTimeout(() => setCopied(''), 2000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <>
            <section>
                <div id="contact-main">
                    <h1 className="contact-me">Contact Me</h1>
                    <h3 className="contact-me-sub">
                        Personal Email:
                        <span
                            
                            onClick={() => handleCopyClick('jacobatanacio@gmail.com', 'personal')}
                            className="email"
                        >

                            jacobatanacio@gmail.com
                        </span>
                        {copied === 'personal' && <span className="email-copied">Copied!</span>}
                    </h3>
                    <h3 className="contact-me-sub">
                        School Email: 
                        <span
                            
                            onClick={() => handleCopyClick('jacob.atanacio@sjsu.edu', 'school')}
                            className="email-school"
                        >

                            jacob.atanacio@sjsu.edu
                        </span>
                        {copied === 'school' && <span className="email-copied">Copied!</span>}
                    
                    </h3>
                </div>
                <div 
                    className="contact-main-border insta">
                    Follow me!
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/javacadu/"
                    >
                        <i className="fa-brands fa-instagram contact-socials-icon insta-icon"></i>
                    </a>
                     
                </div>
                <div className="contact-main-border linkedin">
                    Connect with me!
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/jacob-atanacio/"
                    >
                        <i className="fa-brands fa-linkedin contact-socials-icon linkedin-icon"></i>
                    </a>
                    
                </div>
                <div className="contact-main-border github">
                    Check my repos!
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Javacadu"
                    >
                        <i className="fa-brands fa-github contact-socials-icon github-icon"></i>
                    </a>
                    
                </div>
                <div className="contact-main-border spotify">
                    Listen with me!
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://open.spotify.com/user/jacob_avocado"
                    >
                        <i className="fa-brands fa-spotify contact-socials-icon spotify-icon"></i>
                    </a>
                    
                </div>
                <div className="contact-main-border discord">
                    Ping me!
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="discordapp.com/user/141729611808505856"
                    >
                        <i className="fa-brands fa-discord contact-socials-icon discord-icon"></i>
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

export default Contact;