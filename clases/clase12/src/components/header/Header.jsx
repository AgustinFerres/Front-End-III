import React from 'react'
import { HeaderContainer, HeaderSection } from './styles'

const Header = ({logo, name, countCarrito, setViewSelected}) => {


  const handleView = e => {
    switch (e.target.innerText) {
      case "🛒":
        setViewSelected('cart')
        break;
    
      default:
        case "":
        setViewSelected('local')
        break;
    }
  }
  return (
    <header>
      <HeaderContainer>
        <HeaderSection>
          <img src={logo} alt="" onClick={handleView}/>
          <h1>{name}</h1>
        </HeaderSection>
        <HeaderSection>
          <div onClick={handleView}>🛒</div>
          <span>{countCarrito}</span>
        </HeaderSection>
      </HeaderContainer>
    </header>
  )
}

export default Header