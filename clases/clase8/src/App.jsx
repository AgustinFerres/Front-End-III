import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [inputValues, setInputValues] = useState({name: '', lastname: '', email: '', password: ''})
  
  const noEstaLoggeado = () => {
    return inputValues.name === '';
  }

  const childProps = {
    inputValues, setInputValues
  }

  return (
    <div className="App">
      <Register {...childProps}/>
    </div>
  )
}

export default App
