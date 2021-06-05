import React from 'react'
import {Button} from '../ButtonElement'
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img, A} from './SectionElements'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Sections = ({onClick, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, round, shape, primary, dark, dark2, show,src}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle darkText = {darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    shape = {shape}
                                    smooth={true}
                                    duration = {true}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary? 1 : 0}
                                    dark = {dark ? 1 : 0}
                                    dark2 = {dark2 ? 1 : 0}
                                    style = {{display: show}}
                                ><A href={src} onClick={onClick}>{buttonLabel}&nbsp;<ArrowForwardIcon style = {{fontSize: '1rem'}}/></A></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src = {img} alt={alt} round={round}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Sections;
