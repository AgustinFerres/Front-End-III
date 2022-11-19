import React from 'react'
import { HeadeerContainer, NavBar } from './style'

const Header = ({setViewSelected}) => {


  const handleView = e => {
    switch (e.target.innerText) {
      case 'REPEATED ARTISTS':
        setViewSelected('repeatedArtists');
        break;
      case 'FAVOURITES':
        setViewSelected('favorites');
        break;
      case 'NOT FAVOURITES': 
        setViewSelected('noFavorites');
        break;
      default:
      case 'My Playlist':
        setViewSelected('local');
        break;
    }
  }

  return (
    <HeadeerContainer>
      <h1 onClick={handleView}>My Playlist</h1>
      <NavBar>
          <h4 onClick={handleView}>FAVOURITES</h4>
          <h4 onClick={handleView}>NOT FAVOURITES</h4>
          <h4 onClick={handleView}>REPEATED ARTISTS</h4>
      </NavBar>
    </HeadeerContainer>
  )
}

export default Header