import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding; 0 30px;
height: 800px;
position: relative;
z-index: 1;

:before{
    content: '';
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;

}
`

export const HeroBg = styled.div`
position: absolute;
top: -80px;
right: 0;
botton: 0;
left: 0;
height: 100%;
overflow: hidden;
width: 100%;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
display: flex;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
pointer-events: none;
z-index:
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(0%, -50%);
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    font-family: 'Montserrat', sans serif;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 32px;
    text-align: center;
    max-width: 600px;
    font-family: 'Open Sans', sans serif;
    font-weight: 400;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px
    }
`
export const HeroBtnMenu = styled.ul`
    align-items: center;
    display: flex;
    grid-gap: 40px;
    padding-top: 25px;

`
export const HeroSmall = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    max-width: 600px;
    font-family: 'Open Sans';
    font-weight: 300;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }

    @media screen and (max-width: 480px){
        font-size: 10px
    }
`