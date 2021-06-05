import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Topbar from '../Components/Topbar';
import HeroSection from '../Components/Main';
import Sections from '../Components/Sections';
import Gallery from '../Components/Gallery';
import { homeObjOne , homeObjTwo , homeObjThree } from '../Components/Sections/Data';
import Footer from '../Components/Footer'
import Timeline from '../Components/Timeline';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Topbar isOpen= {isOpen} toggle= {toggle}/>
            <Navbar toggle= {toggle}/>
            <HeroSection />
            <Sections {...homeObjOne}/>
            <Sections {...homeObjTwo}/>
            <Timeline/>
            <Gallery/>
            <Footer/>
        </>
    )
}

export default Home
