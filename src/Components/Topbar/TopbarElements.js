import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import Popup from 'reactjs-popup';

export const TopbarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display:grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const TopbarWrapper = styled.div`
    color: #fff;
`
export const TopbarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`
export const TopbarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem; 
    text-decoration: none;
    list-style: none;
    transtion: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const TopBtnWrap = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`

export const TopbarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowwrap;
    padding: 16px 40px;
    color: #010606;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
export const TopbarContactMe = styled.div`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowwrap;
    padding: 16px 40px;
    color: #fff;
    font-size: 1rem;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Open Sans', sans serif;
`

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-content"
  &-arrow {
      color: #01bf71;
  }
`;