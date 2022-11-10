import React, { useState } from 'react'
import prudctos from '../data.json'
import Header from './Header'
import Card from './Card'
import { CardContainer } from '../styles/styles'

const Container = () => {

    const [countCarrito, setCountCarrito] = useState(0);
    const [countStock, setCountStock] = useState(prudctos.map(product => product.stock));
    const [buttonValue, setButtonValue] = useState(prudctos.map(prudctos => "COMPRAR"))


    const headerProps = {
        countCarrito
    }

    const handleCarrito = (e) => {
        setCountCarrito(prev => prev + 1)
    }
    
    const cardProps = {handleCarrito}

    return (
        <div>
            <Header {...headerProps}/>
            <CardContainer>
                {prudctos.map(product => <Card {...product} {...cardProps} key={product.id}/>)}
            </CardContainer>
        </div>
    )
}

export default Container