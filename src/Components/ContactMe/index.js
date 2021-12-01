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
  Text
} from './ContactMeElements';
import logo from '../logo.png';

const ContactMeSection = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"><img src={logo} style={{ width: '50px', borderRadius: '7px' }}></img></Icon>
          <FormContent>
            <Form action="3">
              <FormH1>
                Contact me
              </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormInput type='message' required />
              <FormButton type='submit'> Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default ContactMeSection
