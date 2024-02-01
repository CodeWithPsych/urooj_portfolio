import '@fontsource/roboto/300.css';
import React from 'react';
import './App.css'
import Navbar from './componets/NavBar/navbar'
import Home from './componets/Home/home'
import Skills from './componets/Skills/skills'
import About from './componets/About/about'
import Portfolio from './componets/Portfolio/portfolio'
import Contact from './componets/Contact/contact'
import SocialLinks from './componets/SocialLinks/socialLinks';
import Footer from './componets/Footer/footer'
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
