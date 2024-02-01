import React, { useEffect, useRef, useState } from 'react';
import './skills.css';
import Card from '../Card/card';
import lead from '../../images/lead.jpg';
import Writing from '../../images/writing.jpeg';
import Logo from '../../images/logo.jpeg';
import Graphic from '../../images/graphic.jpg';
import Social from '../../images/social.webp';

const Skills = () => {
  const skillsSectionRef = useRef();
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(skillsSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`skillsSection ${animateSkills ? 'animateSkills' : ''}`} ref={skillsSectionRef}>
      <div className="SkillHeader">Skills</div>
      <div className="SkillCardSection">
        <div className='s1'><Card img={Logo} title='Logo Making' /></div>
        <div className='s2'><Card img={Writing} title='Assigment Writing' /></div>
        <div className='s3'><Card img={Graphic} title='Graphic Designing' /></div>
        <div className='s4'><Card img={lead} title='Lead Generation' /></div>
        <div className='s5'><Card img={Social} title='Social Media Handling' /></div>
      </div>
    </div>
  );
};

export default Skills;