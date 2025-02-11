import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logoSpotify} alt="Logo do Spotify" />

      <h1>
        <a className='header__link' href="/">Spotify</a>
      </h1>
    </div>
  )
}

export default Header
