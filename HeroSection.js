import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import './HeroSection.css';
import Footer from './Footer';

import { Link, animateScroll as scroll } from "react-scroll";
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>      </h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button variant="light">     
         <Link to='./student'>GET STARTED</Link> 
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         Student Login<i />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
