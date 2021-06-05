import React from 'react';
import Video from '../../Video/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnMenu, HeroSmall } from './HeroElements';
import './Main.css';
const HeroSection = ({ shape }) => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' style={{ WebkitMediaControls: 'display(none)' }} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello, I'm Andrew.</HeroH1>
                <HeroP>
                    Rising sophomore at <a href="https://www.wharton.upenn.edu/" class="whartonLink">Wharton</a>.
                </HeroP>
                <HeroBtnMenu>
                    <a href="https://github.com/icer6683" className="buttonMain" target="_blank" rel="noreferrer"><i class="fab fa-github fa-2x button"></i></a>
                    <a href="http://www.linkedin.com/in/andrewlou6683" className="buttonMain" target="_blank" rel="noreferrer"><i class="fab fa-linkedin fa-2x button"></i></a>
                </HeroBtnMenu>
                <HeroSmall style={{ transform: 'translate(0%, 1400%)' }}>
                    Built from Scratch with React, HTML5 and CSS3
                </HeroSmall>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
