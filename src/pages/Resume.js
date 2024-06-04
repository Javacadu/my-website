import React from "react";
import "./css/Resume.css";

function Resume() {
    return (
        <>
            <section>
                <div className="resume-main-content">
                    <div className="resume-subtitle">
                        <h1>Check out my resume and consider reaching out to me!</h1>
                        <p style={{ fontSize: '25px' }}>
                            Download my resume
                            <a
                                className="resume-download"
                                href="src/assets/images/resume.pdf"
                                download="Jacob_Atanacio_Resume"
                                style={{ fontSize: '25px' }}
                            >
                                <u>here</u>
                            </a>
                        </p>
                        <div className="social-icons">
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
                                href="https://discordapp.com/user/141729611808505856"
                            >
                                <i className="fa-brands fa-discord"></i>
                            </a>
                        </div>
                    </div>
                    <iframe
                        title="my-resume"
                        className="resume"
                        src="https://drive.google.com/file/d/1nPn9_2AgBKTkQyjNpQnT0qttddS771AU/preview"
                        width="640"
                        height="480"
                        allow="autoplay"
                    >
                    </iframe>
                </div>
            </section>
        </>
    );
}

export default Resume;
