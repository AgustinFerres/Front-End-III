import React, { useState } from 'react'
import { Button, ParentComponent, Form, Input, ButtonContainer, Title } from '../styles/styled'

const Login = ({ login }) => {

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  })
  return (
    <div>
      <ParentComponent>
        <Title>
          Login
        </Title>
        <Form onSubmit={(e) => login(e, loginInfo)}>
          <Input
          placeholder='Email'
          onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}
          />
          <Input
          placeholder='Password'
          onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}
          />
          <ButtonContainer>
            <Button>Cancel</Button>
            <Button btnType="Submit">Submit</Button>
          </ButtonContainer>
        </Form>
      </ParentComponent>
      
    </div>
  )
}

export default Login