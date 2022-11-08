import React, { useState, useEffect } from 'react'
import Login from '../login/Login'
import Register from '../register/Register'
import LoginSuccessful from '../login/LoginSuccessful'

const App = () => {

    const [component, setComponent] = useState(null);
    const [user, setUser] = useState(null)

    const handleSubmitRegister = (e,  value ) => {
      e.preventDefault();

      useEffect(() => {
        setUser("hola")
      }, user)
      console.log(user);
      // console.log(userCredentials);
      // if(value !== null){
      //   setComponent(<Login login={handleSubmitLogin}/>)
      //}
      
    }
    
    const handleSubmitLogin = (e, value) => {
      e.preventDefault();
      if(value.email === userCredentials.email && value.password === userCredentials.password){
        console.log("a");
        setComponent(<LoginSuccessful/>)
      }

    } 
    
    const handleClick = (btn) => {
        if(btn === "Register"){
          setComponent(<Register register={handleSubmitRegister}/>)
        }
        if(btn === "Login"){
          setComponent(<Login login={handleSubmitLogin}/>)
        }
    }

  return (
    <div>
        {component}
        <button onClick={() => handleClick("Register")}>No tengo cuenta</button>
        <button onClick={() => handleClick("Login")}>Ya tengo cuenta</button>
    </div>
  )
}

export default App