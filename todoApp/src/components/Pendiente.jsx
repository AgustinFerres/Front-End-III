import React, { useId } from 'react'
import { TaskContainer, Li } from './style'

const Pendiente = ({id, value, handleDelete}) => {

  
  return (
    <Li key={id}>
      <p> {value} </p>
      <button onClick={handleDelete} id={id}>Delete</button>
    </Li>
  )
}

export default Pendiente