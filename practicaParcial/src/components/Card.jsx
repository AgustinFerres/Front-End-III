import React, { useEffect, useState } from 'react'
import { Product, SpanCard, Button } from '../styles/styles'


const Card = ({id, producto, stock, handleCarrito}) => {

    const [cantidadStock, setCantidadStock] = useState(null);
    const [buttonValue, setButtonValue] = useState(null);

    useEffect(() => {
        setCantidadStock(prev => stock)
        setButtonValue("COMPRAR")
    }, [stock])


    const handleCantidadStock = e => {
        handleCarrito()
        setCantidadStock(prev => prev > 1 ? prev - 1 : "agotado")
        if (cantidadStock === 1) {
            setButtonValue("SIN STOCK")
        }
    }

    return (
        <Product>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <div>
                <p> En stock: <SpanCard empty={cantidadStock === "agotado"}> {cantidadStock}</SpanCard> </p>
                <Button id={id} onClick={handleCantidadStock} disabled={buttonValue === "SIN STOCK"}>{buttonValue}</Button>
            </div>
        </Product>
    )
}

export default Card