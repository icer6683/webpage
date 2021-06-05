import React from 'react';
import {TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink, TopBtnWrap, TopbarRoute, TopbarContactMe, StyledPopup}
 from './TopbarElements';
 import Popup from 'reactjs-popup';
 
 const Topbar = ({isOpen, toggle}) => {
    return (
        <TopbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <TopbarWrapper>
                <TopbarMenu>
                    <TopbarLink to="about" onClick={toggle}>About</TopbarLink>
                    <TopbarLink to="updates" onClick={toggle}>Updates</TopbarLink>
                    <TopbarLink to="experiences" onClick={toggle}>Experiences</TopbarLink>
                    <TopbarLink to="interests" onClick={toggle}>Interests</TopbarLink>
                </TopbarMenu>
                <TopBtnWrap>
                <StyledPopup trigger={<TopbarRoute> Contact Me</TopbarRoute>} position="bottom center" arrow= "none">
                {close => ( <TopbarContactMe>
                    Email: andrewlou135@gmail.com <br></br> Phone: (203) 598 1086 <a className="close" onClick={close}>
                        </a></TopbarContactMe>
                        )}</StyledPopup>
                </TopBtnWrap>
            </TopbarWrapper>
        </TopbarContainer>
    );
};

export default Topbar;
