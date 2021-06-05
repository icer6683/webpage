import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialLogo, WebsiteRights, SocialMedia, SocialMediaWrap} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';
import logo from '../logo.png';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                            <img src = {logo} style={{width: '50px', borderRadius: '7px'}}></img>
                            </SocialLogo>
                            <WebsiteRights>Andrew Lou © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
