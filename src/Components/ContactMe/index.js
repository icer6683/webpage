import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  ContactBg,
  FormLong
} from './ContactMeElements';
import {
  VideoBg
} from '../../Components/Main/HeroElements';
import logo from '../logo.png';
import Video from '../../Video/video.mp4';
const ContactMeSection = () => {
  return (
    <>
      <Container>
        <ContactBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' style={{ WebkitMediaControls: 'display(none)' }} />
        </ContactBg>
        <FormWrap>
          <Icon to="/"><img src={logo} style={{ width: '50px', borderRadius: '7px' }}></img></Icon>
          <FormContent>
            <Form action="#">
              <FormH1>
                Contact me
              </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormLong type='message' required />
              <FormButton type='submit'> Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default ContactMeSection
