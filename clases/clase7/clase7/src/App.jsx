import React from 'react'
import './App.css'
import Contador from './components/Contador'
import Productos from './components/Productos'

function App() {

  return (
    <div className="App">
      <h1>Clase 7</h1>
      <div className="card">
        <Contador />
        <Productos />
      </div>
    </div>
  )
}

export default App
