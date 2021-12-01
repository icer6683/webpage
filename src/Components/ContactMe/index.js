import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
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
import { init } from 'emailjs-com';
init("user_9XokT0AVw63uGePNfof0D");

const ContactMeSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser

    emailjs.sendForm(`service_dmu6q5f`, `template_89mtszi`, form.current, `user_9XokT0AVw63uGePNfof0D`)
      .then((result) => {
        alert("Thank you for your email! I will get back to you ASAP", result.text);
      },
        (error) => {
          alert(error.text)
        });
  };
  return (
    <>
      <Container>
        <ContactBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' style={{ WebkitMediaControls: 'display(none)' }} />
        </ContactBg>
        <Icon to="/"><img src={logo} style={{ width: '50px', borderRadius: '7px' }}></img></Icon>
        <FormWrap>
          <FormContent>
            <Form ref={form} onSubmit={handleSubmit}>
              <FormH1>
                Contact me
              </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Subject</FormLabel>
              <FormInput type='subject' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormLong type='message' required />
              <FormButton type='submit' value="Send"> Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default ContactMeSection
