import React from 'react'
import { HeaderContainer, SpanHeader } from '../styles/styles'

const Header = ({countCarrito}) => {
  return (
    <HeaderContainer>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos <SpanHeader>{countCarrito}</SpanHeader></p>
    </HeaderContainer>
  )
}

export default Header