import React,{ useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import data from './data.json'
import Card from './components/Card'


function App() {

  const [count, setCount] = useState(0)
  
  const handleEvent = (e) => {
      setCount(prev => prev + 1)
    }

    const cardProps = {
        handleEvent
    }

    const headerProps = {
      count
    }

  return (
    <div>
      <Header {...headerProps}/>
      <div className='cardContainer'>
        {data.map(post => <Card {...post} {...cardProps} key={post.id}/>)}
      </div>
    </div>
  )
}

export default App
