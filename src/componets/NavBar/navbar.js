import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleBodyClick = (event) => {
            const mobileMenuButton = document.querySelector('.mobileMenu');
            if (mobileMenuButton && mobileMenuButton.contains(event.target)) {
                return;
            }

            setShowMenu(false);
        };

        const handleScroll = () => {
            setShowMenu(false);
        };

        document.body.addEventListener('click', handleBodyClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="desktopNavbar">
            <img src={logo} alt=" logo" className="logo" />
            <div className="desktopHeaderList">
                <Link activeClass='active' to='desktopNavbar' spy={true} offset={0} className="parts" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skillsSection' spy={true} offset={-10} className="parts" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='about' spy={true} offset={-10} className="parts" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='potfolioSection' spy={true} offset={-10} className="parts" onClick={() => setShowMenu(false)}>Portfolio</Link>
            </div>
            <button className="desktopContactbtn" onClick={() => {
                document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
            }} >
                <div className="contactImg">
                    <ImportContactsIcon />
                </div>
                <div className="name">Contact Me</div>
            </button>

            {/* Mobile Menu */}
            <div className={`mobileMenu ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {showMenu && (
                <div className="mobileHeaderList">
                    <Link to='desktopNavbar' spy={true} offset={0} duration={500} className='listItems' onClick={() => setShowMenu(false)}>Home</Link>
                    <Link to='skillsSection' spy={true} offset={-10} duration={500} className='listItems' onClick={() => setShowMenu(false)}>Skills</Link>
                    <Link to='about' spy={true} offset={-10} duration={500} className='listItems' onClick={() => setShowMenu(false)}>About</Link>
                    <Link to='potfolioSection' spy={true} offset={-10} duration={500} className='listItems' onClick={() => setShowMenu(false)}>Portfolio</Link>
                    <Link to='footer' spy={true} offset={-10} duration={500} className='listItems' onClick={() => setShowMenu(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
