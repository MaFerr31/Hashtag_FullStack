import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="item-list">
            <div className="item-list__header">
                <h2 className="item-list__title">Artistas Populares</h2>
                <a href="/" className="item-list__link">Mostrar tudo</a>
            </div>

            <div className="single-item">
                <div className="single-item__div-image-button">
                    <div className="single-item__div-image">
                        <img src="http://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem do Artista" 
                        className="single-item__image" />
                    </div>
                    <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
                </div>
                <p>Henrique e Juliano</p>
                <p>Artista</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
