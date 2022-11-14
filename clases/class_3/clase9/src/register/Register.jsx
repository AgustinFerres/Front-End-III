import React, { useState } from 'react'
import { Button, ParentComponent, Form, Input, ButtonContainer, Title } from '../styles/styled'

const Register = ({ register }) => {

  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  }) 

  return (
    <div>
      <ParentComponent>
        <Title>
          Register
        </Title>
        <Form onSubmit={(e) => register(e, registerInfo)}>
          <Input
          placeholder='Name'
          onChange={(e) => setRegisterInfo({...registerInfo, name: e.target.value})}
          />
          <Input
          placeholder='Email'
          onChange={(e) => setRegisterInfo({...registerInfo, email: e.target.value})}
          />
          <Input
          placeholder='Password'
          onChange={(e) => setRegisterInfo({...registerInfo, password: e.target.value})}
          />
          <Input
          placeholder='Repeat password'
          onChange={(e) => setRegisterInfo({...registerInfo, passwordConfirmation: e.target.value})}
          />
          <ButtonContainer>
            <Button>Cancel</Button>
            <Button btnType="Submit" type='submit'>Submit</Button>
          </ButtonContainer>
        </Form>
      </ParentComponent>
    </div>
  )
}

export default Register