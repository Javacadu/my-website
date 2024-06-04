import React from "react";
import "./css/Resume.css";
import resumePDF from "../assets/images/resume.pdf";

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
                                href={resumePDF}
                                download="Jacob_Atanacio_Resume.pdf"
                                style={{ fontSize: '25px' }}
                            >
                                <u>here</u>
                            </a>
                        </p>
                        <div className="social-icons">
                            {/* Your social media links */}
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
