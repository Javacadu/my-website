import React from "react";
import "./css/Home.css";

function Home() {
  return (
    <>
      <section>
        <div id="home-main">
            <div className="home-main-content">
                <h1 className="home-main-title">
                    Jacob</h1>
                <h1 className="home-main-title">
                    Atanacio</h1>
                <h2 className="home-main-subtitle">
                    Data Science Student at SJSU</h2>
            </div>          
        </div>
      </section>
      <footer>
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

export default Home;
