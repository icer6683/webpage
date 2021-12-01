import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavButton, NavBtnLink, StyledPopup, NavbarContactMe, NavBtn, NavOutLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav} >
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <img src={logo} style={{ width: '50px', borderRadius: '7px' }}></img></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true} exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='updates'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Updates</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='experiences'
                                smooth={true}
                                duration={500}
                                spy={true} exact='true' offset={-80}
                            >Experiences</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='interests'
                                smooth={true}
                                duration={500}
                                spy={true} exact='true' offset={-80}
                            >Interests</NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavButton>
                        <NavBtn> <NavBtnLink to='/contactme'>Contact Me</NavBtnLink></NavBtn>
                    </NavButton>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
