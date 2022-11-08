import React, { useState } from 'react'
import { MainContainer, Button, Input, Form, Title, TaskContainer } from './style'
import Pendiente from './Pendiente'
const Main = () => {

    const [tareasPendientes, setTareasPendientes] = useState([])
    const [id, setId] = useState(1);



    const handleSubmit = (e) => {
        e.preventDefault()

        if (e.target[0].value !== ''){

            tareasPendientes.push({
                id: id,
                value: e.target[0].value
            })
            setId(prev => prev + 1)
        }
    }
    const handleDelete = (e) => {
        e.preventDefault()

        const index = tareasPendientes.findIndex(tarea => tarea.id === Number(e.target.id))
        console.log(index);
        tareasPendientes.slice(index, 1)
    }

    const pendingTasks = tareasPendientes.map(tarea => <Pendiente {...tarea} {...handleDelete} key={tarea.id}/>);
    
    return (
        <MainContainer>
            <Title>Todo App</Title>
            <Form onSubmit={handleSubmit}>
                <Input id="nuevaTarea" type="text" placeholder="nueva tarea"/>
                <Button type="submit">Crear tarea</Button>   
            </Form>
            <TaskContainer>
                {pendingTasks}
            </TaskContainer>
        </MainContainer>
    )
}

export default Main