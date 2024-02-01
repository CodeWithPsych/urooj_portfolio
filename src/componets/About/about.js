import React, { useEffect, useRef, useState } from 'react';
import './about.css'
import '@fontsource/roboto/300.css';
const About = () => {
  const aboutRef = useRef();
  const [animateAbout, setanimateAbout] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setanimateAbout(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
   <div className={`about ${animateAbout ? 'animateAbout' : ''}`} ref={aboutRef}>
    <div className="aboutHeading">About</div>
    <div className="aboutFirst">👋 Hello there! I'm Urooj Kamran, a passionate BBA student hailing from the vibrant city of Bahawalpur. In my journey through the realm of business administration, I've embraced opportunities that allowed me to blend creativity and strategy seamlessly.</div>
    <div className="aboutSecond">🚀 Over the past year, I had the privilege of contributing to the dynamic team at Regional Plan 9. During this time, I assumed the role of a media influencer, utilizing my skills to make an impact in the digital landscape. This experience not only sharpened my understanding of media dynamics but also fueled my enthusiasm for making a meaningful online presence.</div>
    <div className="aboutThird">🎨 Additionally, my stint at Media Nexus for two months provided me with hands-on experience as a graphic designer. I immersed myself in the world of visual storytelling, creating compelling graphics that communicated messages effectively.</div>
    <div className="aboutFourth">💻 And, I'm deeply engrossed in online lead generation, leveraging the power of digital platforms to connect businesses with their target audience.</div>

   </div>
  )
}

export default About