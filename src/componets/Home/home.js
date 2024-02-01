import React from 'react';
import './home.css';
import '../NavBar/navbar'
import cv from '../../images/Resume.pdf';
// import mga from '../../images/urooj.png';
import '@fontsource/roboto/700.css';

const Home = ({ closeMenu }) => {
    return (
        <div className="home" onClick={closeMenu}>
            <div className="HomeFirst">
                <span className="hello">Hello</span>
                <span className="iAm">I'm</span>
                <span className="urooj">Urooj Kamran</span>
                <p className="homeP">Welcome to my Portfolio</p>
                <button className="cv">
                    <a href={cv} download>
                        <div><i className="material-icons file">file_download</i></div>
                        <div>Download Resume</div>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Home;