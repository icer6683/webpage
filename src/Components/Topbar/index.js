import React from 'react';
import { TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink, TopBtnWrap, TopbarRoute, TopbarContactMe, StyledPopup, TopBtnLink }
    from './TopbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Topbar = ({ isOpen, toggle }) => {
    const changeTop = () => {
        scroll.scrollToTop();
    }
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
                    <TopBtnLink to='/contactme' onClick={changeTop}>Contact Me</TopBtnLink>
                </TopBtnWrap>
            </TopbarWrapper>
        </TopbarContainer>
    );
};

export default Topbar;
