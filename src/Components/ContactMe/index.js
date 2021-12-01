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

const ContactMe = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
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

export default ContactMe
