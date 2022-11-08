import React, { Fragment } from 'react'
import { Product, SpanCard, Button } from '../styles/styles'


const Card = ({id, producto, stock, countStock, buttonValue,  handleCarrito}) => {

    
    return (
        <Product>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <div>
                <p> En stock: <SpanCard main={countStock[Number(id) - 1] === "agotado" && true}> {countStock[Number(id) - 1]}</SpanCard> </p>
                <Button id={id} onClick={handleCarrito} disabled={buttonValue[Number(id) - 1] === "SIN STOCK" && true  }>{buttonValue[Number(id) - 1]}</Button>
            </div>
        </Product>
    )
}

export default Card